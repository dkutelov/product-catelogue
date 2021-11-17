import ProductList from '../components/product-list/product-list.component';
import productService from '../services/products';

export default function Home({ products }) {
  return (
    <div className='main-container'>
      {products.length !== 0 && <ProductList products={products} />}
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

  return {
    props: {
      products,
    },
  };
}
