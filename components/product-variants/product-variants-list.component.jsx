import { useState } from 'react';
import ProductVariant from './product-variant.component';

import styles from './product-variant.module.css';

function ProductVariantsList({ handleChange }) {
  let [variantCount, setVariantCount] = useState(0);

  return (
    <div>
      <h3>Варианти</h3>
      {Array.from({ length: variantCount + 1 }, (x, i) => i).map((index) => (
        <ProductVariant key={index} id={index} handleChange={handleChange} />
      ))}
      <div
        className={styles.buttonWrapper}
        onClick={() => setVariantCount(variantCount + 1)}
      >
        <img src='/icons/plus-icon.svg' alt='add variant' />
      </div>
    </div>
  );
}

export default ProductVariantsList;
