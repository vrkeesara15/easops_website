'use client';

import React, { CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';

type MotionProps<T> = T & {
  initial?: CSSProperties;
  animate?: CSSProperties;
  whileInView?: CSSProperties;
  transition?: { duration?: number; delay?: number };
};

function useCombinedRef<T>(forwardedRef: React.ForwardedRef<T>, localRef: React.MutableRefObject<T | null>) {
  useEffect(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') {
      forwardedRef(localRef.current);
    } else {
      forwardedRef.current = localRef.current;
    }
  });
}

function useAnimateOnView<T extends HTMLElement>(options: MotionProps<React.HTMLAttributes<T>>) {
  const { initial, animate, whileInView, transition } = options;
  const nodeRef = useRef<T | null>(null);
  const [style, setStyle] = useState<CSSProperties>(() => ({
    ...(options.style || {}),
    ...(initial || {}),
  }));

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const target = { ...(animate || whileInView || {}), ...options.style } as CSSProperties;
    const transitionStyle: CSSProperties = {
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: `${transition?.duration ?? 0.7}s`,
      transitionDelay: `${transition?.delay ?? 0}s`,
    };

    let observer: IntersectionObserver | null = null;
    if (whileInView) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStyle({ ...target, ...transitionStyle });
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.35 },
      );
      observer.observe(node);
    } else {
      const frame = requestAnimationFrame(() => setStyle({ ...target, ...transitionStyle }));
      return () => cancelAnimationFrame(frame);
    }

    return () => observer?.disconnect();
  }, [animate, whileInView, transition, options.style]);

  return { nodeRef, style };
}

function createMotionComponent<T extends HTMLElement>(tag: keyof JSX.IntrinsicElements) {
  return forwardRef<T, MotionProps<React.ComponentPropsWithoutRef<typeof tag>>>(function MotionComponent(
    props,
    ref,
  ) {
    const { children, initial, animate, whileInView, transition, style, ...rest } = props;
    const { nodeRef, style: computedStyle } = useAnimateOnView({ initial, animate, whileInView, transition, style });
    useCombinedRef(ref, nodeRef as React.MutableRefObject<T | null>);
    const Element = tag as any;
    return (
      <Element ref={nodeRef} style={computedStyle} {...rest}>
        {children}
      </Element>
    );
  });
}

export const motion = {
  div: createMotionComponent<HTMLDivElement>('div'),
  section: createMotionComponent<HTMLElement>('section'),
  header: createMotionComponent<HTMLElement>('header'),
};

export type Variants = Record<string, CSSProperties>;
export type MotionValue = number;
