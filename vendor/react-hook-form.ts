'use client';

import { useCallback, useState } from 'react';

type SubmitHandler<TFieldValues> = (data: TFieldValues, event?: React.BaseSyntheticEvent) => void | Promise<void>;
type SubmitErrorHandler = (errors: Record<string, unknown>) => void | Promise<void>;

type RegisterReturn = {
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

type UseFormProps<TFieldValues> = {
  defaultValues?: Partial<TFieldValues>;
};

type FieldError = {
  type?: string;
  message?: string;
};

type FormState<TFieldValues> = {
  errors: Partial<Record<keyof TFieldValues, FieldError>>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
};

export function useForm<TFieldValues extends Record<string, any>>(props: UseFormProps<TFieldValues> = {}) {
  const [values, setValues] = useState<Partial<TFieldValues>>(props.defaultValues ?? {});
  const [errors, setErrors] = useState<FormState<TFieldValues>['errors']>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const register = useCallback(
    (name: keyof TFieldValues): RegisterReturn => ({
      name: name as string,
      value: values[name] ?? '',
      onChange: (event) => {
        const value = event.target.value;
        setValues((prev) => ({ ...prev, [name]: value }));
      },
    }),
    [values],
  );

  const setError = useCallback((name: keyof TFieldValues, error: FieldError) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const clearErrors = useCallback(() => setErrors({}), []);

  const handleSubmit = useCallback(
    (onValid: SubmitHandler<TFieldValues>, onInvalid?: SubmitErrorHandler) =>
      async (event?: React.BaseSyntheticEvent) => {
        event?.preventDefault();
        clearErrors();
        setIsSubmitting(true);
        setIsSubmitSuccessful(false);
        try {
          await onValid(values as TFieldValues, event);
          setIsSubmitSuccessful(true);
        } catch (error) {
          onInvalid?.({ form: error });
        } finally {
          setIsSubmitting(false);
        }
      },
    [clearErrors, values],
  );

  const reset = useCallback((nextValues?: Partial<TFieldValues>) => {
    setValues(nextValues ?? (props.defaultValues ?? {}));
    clearErrors();
    setIsSubmitSuccessful(false);
  }, [clearErrors, props.defaultValues]);

  return {
    register,
    handleSubmit,
    reset,
    setValue: (name: keyof TFieldValues, value: any) => setValues((prev) => ({ ...prev, [name]: value })),
    setError,
    clearErrors,
    watch: () => values,
    control: null,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    } satisfies FormState<TFieldValues>,
  };
}

export type { FieldError, SubmitHandler };
