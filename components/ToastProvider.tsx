'use client';

import * as Toast from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import styles from './ToastProvider.module.scss';

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Viewport className={styles.viewport} />
    </Toast.Provider>
  );
}

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  variant?: 'success' | 'error' | 'info';
}

export function ToastNotification({
  open,
  onOpenChange,
  title,
  description,
  variant = 'info',
}: ToastProps) {
  return (
    <Toast.Root
      className={`${styles.toast} ${styles[variant]}`}
      open={open}
      onOpenChange={onOpenChange}
    >
      <Toast.Title className={styles.title}>{title}</Toast.Title>
      {description && (
        <Toast.Description className={styles.description}>
          {description}
        </Toast.Description>
      )}
      <Toast.Close className={styles.close}>
        <X size={16} />
      </Toast.Close>
    </Toast.Root>
  );
}

