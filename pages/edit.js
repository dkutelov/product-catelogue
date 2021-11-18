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
        updateProduct={updateProduct}
      />
    </div>
  );
}

export async function getStaticProps() {
  let products = [];

  try {
    products = await productService.getAll();
  } catch (error) {
    console.log(error);
  }

  // sort by category
  // products.sort((a, b) => {
  //   return parseInt(b.category) - parseInt(a.category);
  // });

  return {
    props: {
      products,
    },
  };
}

export default Edit;

// useEffect(() => {
//     if (updatedProduct !== null) {
//       formData.name = updatedProduct.name;
//       formData.price = updatedProduct.price;
//       formData.description = updatedProduct.description;
//       formData.link = updatedProduct.link;
//       formData.imageUrl = updatedProduct.imageUrl;
//       formData.productVariants = updatedProduct.productVariants;
//     }
//   }, [updatedProduct]);
