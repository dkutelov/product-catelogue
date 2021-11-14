import { useState, useEffect } from 'react';
import PhotoDropzone from './photo-dropzone.component';
import cuid from 'cuid';

import * as firbaseService from '../../services/firebase';
import styles from './photo-upload.module.css';

// handle jpeg
function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf(('.' - 1) >>> 0) + 2);
}

const PhotoUpload = ({ handleImageUrl }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  useEffect(() => {
    if (files.length > 0) {
      setLoading(true);
      uploadFile();
    }
  }, [files]);

  const uploadFile = async () => {
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dariku/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.eager[0].secure_url);
    handleImageUrl(file.eager[0].secure_url);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Снимка</label>
      <PhotoDropzone setFiles={setFiles} />
      <div className={styles.previewWrapper}>
        {loading && (
          <div className={styles.spinnerWrapper}>
            <img src='/icons/iphone-spinner.gif' />
          </div>
        )}
        {image && (
          <img
            src={image}
            alt='image-preview'
            className={styles.imagePreview}
          />
        )}
      </div>
      {files.length > 0 && (
        <div className={styles.buttonWrapper}>
          <img src='/icons/cancelRed.svg' onClick={handleCancelCrop} />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
