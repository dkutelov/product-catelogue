import { useState } from 'react';

import InputField from '../form-components/input-field/input-field.component';
import styles from './admin-product-list.module.css';
import productService from '../../services/products';

function AdminProductListItem({ product, updateProducts }) {
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [updatedRegPrice, setUpdatedRegPrice] = useState(0);
  const updateProduct = () => {};

  const onPriceChange = (e) => {
    setUpdatedPrice(e.target.value);
  };

  const onRegPriceChange = (e) => {
    setUpdatedRegPrice(e.target.value);
  };

  const onInputCompleted = (e) => {
    const fieldName = e.target.name;
    const data = {};

    if (fieldName === 'updated-price' && updatedPrice !== 0) {
      data.price = updatedPrice;
    } else if (fieldName === 'updated-reg-price' && updatedRegPrice !== 0) {
      data.regPrice = updatedRegPrice;
    }

    if (data.price || data.regPrice) {
      updatePrices(data);
    }
  };

  const caputureEnter = (e) => {
    if (e.key === 'Enter') {
      updatePrices(e.target.name);
    }
  };

  const updatePrices = (data) => {
    productService.update(product.id, data).then(() => {
      setUpdatedPrice(0);
      setUpdatedRegPrice(0);
      updateProducts();
    });
  };
  return (
    <li className={styles.productItem}>
      <h3 className={styles.productTitle}>{product.name}</h3>
      <div className={styles.priceWrapper}>
        <p className={styles.priceTag}>Намалена Цена: {product.price}лв</p>
        <div className={styles.inputWrapper}>
          <InputField
            name='updated-price'
            value={updatedPrice}
            handleInputChange={onPriceChange}
            type='number'
            onFieldLeave={onInputCompleted}
            caputureEnter={caputureEnter}
          />
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.priceTag}>
          Редовна Цена: {product.regPrice || ''}лв
        </p>
        <div className={styles.inputWrapper}>
          <InputField
            name='updated-reg-price'
            value={updatedRegPrice}
            handleInputChange={onRegPriceChange}
            type='number'
            onFieldLeave={onInputCompleted}
            caputureEnter={caputureEnter}
          />
        </div>
      </div>
      <div>
        <div className={styles.buttonWrapper}>
          <img
            src='/icons/edit.svg'
            onClick={() => {
              updateProduct(product.id);
            }}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <img
            src='/icons/cancelRed.svg'
            onClick={() => {
              deleteProduct(product.id);
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default AdminProductListItem;
