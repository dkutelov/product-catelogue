import styles from './admin-product-list.module.css';
import AdminProductListItem from './admin-product-list-item.component';

function AdminProductList({ products, deleteProduct, updateLatestProducts }) {
  return (
    <div className={styles.productsWrapper}>
      <h3 className='main-heading'>Продукти</h3>

      <ul className={styles.productList}>
        {products.map((p) => (
          <AdminProductListItem
            product={p}
            key={p.id}
            updateProducts={updateLatestProducts}
          />
        ))}
      </ul>
    </div>
  );
}

export default AdminProductList;
