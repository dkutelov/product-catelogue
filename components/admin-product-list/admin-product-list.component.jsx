import styles from './admin-product-list.module.css';

function AdminProductList({ products, deleteProduct, updateProduct }) {
  return (
    <div>
      <h3 className='main-heading'>Последни Продукти</h3>

      <ul className={styles.productList}>
        {products.map((p) => (
          <li key={p.id} className={styles.productItem}>
            {p.name.substring(0, 85)}

            <div className={styles.buttonWrapper}>
              <img
                src='/icons/edit.svg'
                onClick={() => {
                  updateProduct(p.id);
                }}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <img
                src='/icons/cancelRed.svg'
                onClick={() => {
                  deleteProduct(p.id);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProductList;
