import { useState } from 'react';

import TextareaField from '../form-components/input-field/input-field.component';
import PhotoUpload from '../photo-upload/photo-upload.component';

function ProductVariant({ id, handleChange }) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    handleChange(id, {
      id,
      name,
      imageUrl,
    });
  };

  const handleImageChange = (imageUrl) => {
    setImageUrl(imageUrl);
    handleChange(id, {
      id,
      name,
      imageUrl,
    });
  };

  return (
    <div>
      <TextareaField
        label='Име'
        value={name}
        handleInputChange={handleNameChange}
        required={false}
      />
      <PhotoUpload handleImageUrl={handleImageChange} />
    </div>
  );
}

export default ProductVariant;
