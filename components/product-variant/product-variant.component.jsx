import styles from './product-variant.module.css';

function ProductListVariant({ variant }) {
  //console.log(variant);
  return (
    <li className={styles.card}>
      <div class={styles.imageWrapper}>
        <img
          className={styles.image}
          src={variant.imageUrl}
          alt={variant.name}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{variant.name}</h3>

        <a className={styles.link} href={variant.link} target='_blank'>
          още в еМаг
        </a>
      </div>
    </li>
  );
}

export default ProductListVariant;
