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

  return (
    <div className='container two-columns'>
      <AddNewProduct updateLatestProducts={updateLatestProducts} />
      <AdminProductList products={latestProducts} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let products = await productService.getAll();
  // products = products.map((product) => {
  //   product.id, product.name;
  // });
  return {
    props: {
      products: products,
    },
  };
}

export default AdminPage;
