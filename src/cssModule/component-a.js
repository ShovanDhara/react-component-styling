import React from 'react';
import styles from './component-a.module.css';

export const CompA = props => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>
      Component A
    </h3>
    <button className={styles.button}>
      button
    </button>
  </div>
);
