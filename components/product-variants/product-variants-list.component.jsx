import { useState, useEffect } from 'react';
import ProductVariant from './product-variant.component';

import styles from './product-variant.module.css';

function ProductVariantsList({ handleChange, resetVariants }) {
  let [variantCount, setVariantCount] = useState(0);

  useEffect(() => {
    if (resetVariants) {
      setVariantCount(0);
    }
  }, [resetVariants]);

  return (
    <div>
      <h3 className={styles.variantTitle}>Варианти</h3>
      {Array.from({ length: variantCount + 1 }, (x, i) => i).map((index) => (
        <ProductVariant
          key={index}
          id={index}
          handleChange={handleChange}
          shouldReset={resetVariants}
        />
      ))}
      <div className={styles.buttonWrapper}>
        <span
          className={styles.addButton}
          onClick={() => setVariantCount(variantCount + 1)}
        >
          <img src='/icons/plus-icon.svg' alt='add variant' />
        </span>
      </div>
    </div>
  );
}

export default ProductVariantsList;
