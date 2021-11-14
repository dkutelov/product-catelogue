import styles from './select-field.module.css';

function SelectField({ id, name, label, options, value, handleInputChange }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        className={styles.select}
      >
        <option value='' disabled='disabled' hidden>
          Choose Category
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
