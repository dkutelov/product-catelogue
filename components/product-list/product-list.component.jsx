import ProductListItem from '../porduct-list-item/product-list-item.component';
import styles from './product-list.module.css';

function ProductList({ products }) {
  return (
    <ul className={styles.productsWrapper}>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductList;
