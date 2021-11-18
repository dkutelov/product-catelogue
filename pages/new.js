import AddNewProduct from '../components/add-new-product/add-new-product.component';

import productService from '../services/products';

function AdminPage({ products }) {
  return (
    <div className='container'>
      <AddNewProduct />
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
