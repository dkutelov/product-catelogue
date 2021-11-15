import { useState } from 'react';

import styles from './add-new-product.module.css';
import productService from '../../services/products';
import InputField from '../form-components/input-field/input-field.component';
import TextareaField from '../form-components/textarea-field/textarea-field.component';
import PhotoUpload from '../photo-upload/photo-upload.component';
import SelectField from '../form-components/select-field/select-field.component';
import ProductVariantsList from '../product-variants/product-variants-list.component';

import { categories } from '../../data/categories';

function AddNewProduct({ updateLatestProducts }) {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    link: '',
    imageUrl: '',
    category: '',
    productVariants: [],
    updatedAt: Date.now(),
  });

  const [resetVariants, setResetVariants] = useState(false);

  const createProduct = (e) => {
    e.preventDefault();

    productService.add(formData).then(() => {
      setResetVariants(true);
      setFormData({
        name: '',
        price: 0,
        description: '',
        link: '',
        imageUrl: '',
        category: '',
        productVariants: [],
      });
      setResetVariants(false);
      updateLatestProducts();
    });
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUrl = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl,
    }));
  };

  const handleVariantChange = (variantIndex, variantData) => {
    let variant = formData.productVariants[variantIndex];
    // index does not exists
    if (!variant) {
      setFormData((prevData) => ({
        ...prevData,
        productVariants: [...prevData.productVariants, variantData],
      }));
      return;
    }
    // index exists
    formData.productVariants[variantIndex] = variantData;
  };

  return (
    <div>
      <h1 className='main-heading'>Нов Продукт</h1>
      <div className={styles.formWrapper}>
        <PhotoUpload handleImageUrl={handleImageUrl} />
        <form onSubmit={createProduct}>
          <InputField
            label='Име'
            name='name'
            value={formData.name}
            handleInputChange={handleInputChange}
          />
          <InputField
            label='Цена'
            name='price'
            value={formData.price}
            handleInputChange={handleInputChange}
            type='number'
          />
          <InputField
            label='Линк'
            name='link'
            value={formData.link}
            handleInputChange={handleInputChange}
            type='text'
            required={false}
          />
          <TextareaField
            label='Описание'
            name='description'
            value={formData.description}
            handleInputChange={handleInputChange}
          />
          <SelectField
            label='Категория'
            name='category'
            value={formData.category}
            handleInputChange={handleInputChange}
            options={categories}
          />
          <ProductVariantsList
            handleChange={handleVariantChange}
            resetVariants={resetVariants}
          />
          <button type='submit' className={styles.button}>
            Запази
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
