import React from 'react';

import styles from './input-field.module.css';

function InputField({
  label = '',
  name,
  value,
  handleInputChange,
  type = 'text',
  required = true,
  placeholder = '',
  onFieldLeave = () => {},
  caputureEnter = () => {},
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
        onBlur={onFieldLeave}
        onKeyDown={caputureEnter}
        required={required}
        className={styles.field}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
