import { useState } from 'react';
import Image from 'next/image';

import ProductListVariant from '../product-variant/product-variant.component';
import styles from './product-list-item.module.css';

function ProductListItem({ product }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };
  //   console.log(product);
  return (
    <li className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            layout='fill'
            className={styles.image}
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <div className={styles.price}>
            {product.regPrice && (
              <span className={styles.regPrice}>{product.regPrice}лв</span>
            )}
            <span>{product.price}лв</span>
          </div>
          <div className={styles.innerWrapper}>
            <a className={styles.link} href={product.link} target='_blank'>
              още в еМаг
            </a>
            <div
              className={styles.moreIconWrapper}
              onClick={() => toggleDescription()}
            >
              {!isDescriptionVisible ? (
                <img src='/icons/open.svg' alt='more' />
              ) : (
                <img src='/icons/close.svg' alt='more' />
              )}
            </div>
          </div>
        </div>
      </div>
      {isDescriptionVisible && (
        <div>
          <p className={styles.description}>{product.description}</p>
        </div>
      )}
      {product.productVariants && (
        <>
          <div className={styles.separator}></div>
          <ul className={styles.variantsWrapper}>
            {product.productVariants.map((variant, index) => (
              <ProductListVariant key={index} variant={variant} />
            ))}
          </ul>
        </>
      )}
    </li>
  );
}

export default ProductListItem;
