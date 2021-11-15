import { useState, useEffect } from 'react';

import TextareaField from '../form-components/input-field/input-field.component';
import PhotoUpload from '../photo-upload/photo-upload.component';
import styles from './product-variant.module.css';

function ProductVariant({ id, handleChange, shouldReset }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [variantLink, setVariantLink] = useState('');

  const [formData, setFormData] = useState({
    id,
    name: '',
    link: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (shouldReset) {
      setFormData({
        name: '',
        link: '',
        imageUrl: '',
      });
    }
  }, [shouldReset]);

  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    handleChange(id, formData);
  };

  const handleImageChange = (imageUrl) => {
    setImageUrl(imageUrl);
    handleChange(id, formData);
  };

  return (
    <div className={styles.variantWrapper}>
      <TextareaField
        label='Име'
        name='name'
        value={formData.name}
        handleInputChange={handleNameChange}
        required={false}
      />
      <TextareaField
        label='Линк'
        name='link'
        value={formData.link}
        handleInputChange={handleNameChange}
        required={false}
      />
      <PhotoUpload handleImageUrl={handleImageChange} />
    </div>
  );
}

export default ProductVariant;
