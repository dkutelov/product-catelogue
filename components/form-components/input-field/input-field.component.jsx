import React from 'react';

import styles from './input-field.module.css';

function InputField({
  label,
  name,
  value,
  handleInputChange,
  type = 'text',
  required = true,
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={styles.field}
      />
    </div>
  );
}

export default InputField;
