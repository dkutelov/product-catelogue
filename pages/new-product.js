import { useState, useEffect } from 'react';

import AddNewProduct from '../components/add-new-product/add-new-product.component';
import AdminProductList from '../components/admin-product-list/admin-product-list.component';

import productService from '../services/products';

function AdminPage({ products }) {
  const [latestProducts, setLatestProducts] = useState([]);

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

  return (
    <div className='container two-columns'>
      <AddNewProduct updateLatestProducts={updateLatestProducts} />
      <AdminProductList
        products={latestProducts}
        deleteProduct={deleteProduct}
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
