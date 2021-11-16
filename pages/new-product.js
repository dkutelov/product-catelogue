import { useState, useEffect } from 'react';

import AddNewProduct from '../components/add-new-product/add-new-product.component';
import AdminProductList from '../components/admin-product-list/admin-product-list.component';

import productService from '../services/products';

function AdminPage({ products }) {
  const [latestProducts, setLatestProducts] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState(null);

  const updateLatestProducts = async () => {
    const updatedProduts = await productService.getAll();
    setLatestProducts(updatedProduts);
  };

  useEffect(() => {
    setLatestProducts(products);
  }, [products]);

  const deleteProduct = async (id) => {
    await productService.delete(id);
    updateLatestProducts();
  };

  const updateProduct = async (id) => {
    const product = await productService.getOneById(id);
    setUpdatedProduct(product);
  };

  return (
    <div className='container two-columns'>
      <AddNewProduct
        updateLatestProducts={updateLatestProducts}
        updatedProduct={updatedProduct}
      />
      <AdminProductList
        products={latestProducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  let products = await productService.getAll();
  return {
    props: {
      products: products,
    },
  };
}

export default AdminPage;
