type Issue = { path: (string | number)[]; message: string };
export type SafeParseSuccess<T> = { success: true; data: T };
export type SafeParseError = { success: false; error: { issues: Issue[] } };

type ParseReturn<T> = SafeParseSuccess<T> | SafeParseError;

class BaseSchema<T> {
  protected refinements: ((value: T) => string | null)[] = [];

  refine(check: (value: T) => boolean, message: string) {
    this.refinements.push((value) => (check(value) ? null : message));
    return this;
  }

  protected runRefinements(value: T): Issue[] {
    const issues: Issue[] = [];
    this.refinements.forEach((fn) => {
      const result = fn(value);
      if (result) {
        issues.push({ path: [], message: result });
      }
    });
    return issues;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parse(_value: unknown, _path: (string | number)[] = []): T {
    throw new Error('Not implemented');
  }

  safeParse(value: unknown): ParseReturn<T> {
    try {
      const data = this.parse(value);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: (error as SafeParseError['error']) };
    }
  }
}

class ZString extends BaseSchema<string> {
  private minLength?: { length: number; message?: string };
  private emailMessage?: string;
  private optionalFlag = false;

  min(length: number, message?: { message?: string }) {
    this.minLength = { length, message: message?.message };
    return this;
  }

  email(message = 'Invalid email address') {
    this.emailMessage = message;
    return this;
  }

  optional() {
    this.optionalFlag = true;
    return this;
  }

  parse(value: unknown, path: (string | number)[] = []): string {
    if (value === undefined || value === null) {
      if (this.optionalFlag) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value as unknown as string;
      }
      throw { error: { issues: [{ path, message: 'Required' }] } };
    }
    if (typeof value !== 'string') {
      throw { error: { issues: [{ path, message: 'Expected string' }] } };
    }
    if (this.minLength && value.trim().length < this.minLength.length) {
      throw {
        error: {
          issues: [
            {
              path,
              message: this.minLength.message || `Must be at least ${this.minLength.length} characters`,
            },
          ],
        },
      };
    }
    if (this.emailMessage && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      throw { error: { issues: [{ path, message: this.emailMessage }] } };
    }
    const refinements = this.runRefinements(value);
    if (refinements.length) {
      throw { error: { issues: refinements.map((issue) => ({ ...issue, path })) } };
    }
    return value;
  }
}

class ZEnum<T extends [string, ...string[]]> extends BaseSchema<T[number]> {
  constructor(private readonly values: T) {
    super();
  }

  parse(value: unknown, path: (string | number)[] = []): T[number] {
    if (typeof value !== 'string' || !this.values.includes(value)) {
      throw { error: { issues: [{ path, message: `Must be one of: ${this.values.join(', ')}` }] } };
    }
    return value;
  }
}

class ZObject<T extends Record<string, BaseSchema<any>>> extends BaseSchema<{ [K in keyof T]: ReturnType<T[K]['parse']> }> {
  constructor(private readonly shape: T) {
    super();
  }

  parse(value: unknown): { [K in keyof T]: ReturnType<T[K]['parse']> } {
    if (typeof value !== 'object' || value === null) {
      throw { error: { issues: [{ path: [], message: 'Expected object' }] } };
    }
    const result: Record<string, unknown> = {};
    Object.keys(this.shape).forEach((key) => {
      const schema = this.shape[key];
      try {
        result[key] = schema.parse((value as Record<string, unknown>)[key], [key]);
      } catch (error) {
        throw error;
      }
    });
    return result as { [K in keyof T]: ReturnType<T[K]['parse']> };
  }
}

class ZOptional<T> extends BaseSchema<T | undefined> {
  constructor(private readonly schema: BaseSchema<T>) {
    super();
  }

  parse(value: unknown, path: (string | number)[] = []): T | undefined {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    return this.schema.parse(value, path);
  }
}

export const z = {
  string: () => new ZString(),
  enum: <T extends [string, ...string[]]>(values: T) => new ZEnum(values),
  object: <T extends Record<string, BaseSchema<any>>>(shape: T) => new ZObject(shape),
  optional: <T>(schema: BaseSchema<T>) => new ZOptional(schema),
};

export type infer<T extends BaseSchema<any>> = T extends BaseSchema<infer U> ? U : never;

export type ZodIssue = Issue;
export type ZodError = { issues: Issue[] };

export default z;
