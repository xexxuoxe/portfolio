'use client';

import { useRouter } from 'next/navigation';
import styles from './modal.module.scss';

export default function ModalWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <button
          className={styles.close_btn}
          onClick={() => router.back()}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
