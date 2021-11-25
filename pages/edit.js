import { useState, useEffect } from 'react';

import AdminProductList from '../components/admin-product-list/admin-product-list.component';
import productService from '../services/products';

function Edit({ products }) {
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

  const updateProduct = async (id) => {
    const product = await productService.getOneById(id);
    setUpdatedProduct(product);
  };

  return (
    <div className='container'>
      <AdminProductList
        products={latestProducts}
        deleteProduct={deleteProduct}
        updateLatestProducts={updateLatestProducts}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  let products = [];

  try {
    products = await productService.getAll();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      products,
    },
  };
}

export default Edit;
