import React from 'react';
import styles from './component-b.module.css';

export const CompB = props => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>
      Component B
    </h3>
    <button className={styles.button}>
      button
    </button>
  </div>
);
