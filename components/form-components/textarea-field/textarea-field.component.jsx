import React from 'react';

import styles from './textarea-field.module.css';

function TextareaField({ label, name, value, handleInputChange }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        className={styles.field}
      />
    </div>
  );
}

export default TextareaField;
