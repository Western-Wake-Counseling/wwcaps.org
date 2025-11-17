'use client';

import { forwardRef } from 'react';
import * as Label from '@radix-ui/react-label';
import { cn } from '@/lib/utils';
import styles from './FormField.module.scss';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, required, children, className }, ref) => {
    return (
      <div ref={ref} className={cn(styles.formField, className)}>
        <Label.Root className={styles.label} htmlFor={label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </Label.Root>
        {children}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

