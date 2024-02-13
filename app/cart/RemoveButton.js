'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import removeItem from './actions';
import styles from './page.module.scss';

export default function RemoveButton({ product }) {
  const router = useRouter();

  const handleRemoveItem = async () => {
    await removeItem(product);
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleRemoveItem} className={styles.removeButton}>
        Remove
      </button>
    </div>
  );
}
