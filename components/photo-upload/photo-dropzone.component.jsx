import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import styles from './photo-upload.module.css';

const PhotoDropzone = ({ setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className={styles.dropzone}
        style={{ borderColor: isDragActive ? '#27be94' : '#fbe300' }}
      >
        <input {...getInputProps()} />
        <img
          src='/icons/uploadFile.svg'
          alt='upload icon'
          className={styles.uploadIcon}
        />
      </div>
    </>
  );
};

export default PhotoDropzone;
