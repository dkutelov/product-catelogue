import { useState, useEffect } from 'react';

import TextareaField from '../form-components/input-field/input-field.component';
import PhotoUpload from '../photo-upload/photo-upload.component';
import styles from './product-variant.module.css';

function ProductVariant({ id, handleChange, shouldReset }) {
  const [formData, setFormData] = useState({
    id,
    name: '',
    link: '',
  });

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (shouldReset) {
      setFormData({
        name: '',
        link: '',
      });
      setImageUrl(null);
    }
  }, [shouldReset]);

  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    handleChange(id, { ...formData, imageUrl });
  };

  const handleImageUrl = (imageUrl) => {
    //console.log('from variant', imageUrl);
    setImageUrl(imageUrl);
    handleChange(id, { imageUrl, ...formData });
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
      <PhotoUpload handleImageUrl={handleImageUrl} shouldReset={shouldReset} />
    </div>
  );
}

export default ProductVariant;
