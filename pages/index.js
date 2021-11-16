import productService from '../services/products';

export default function Home({ products }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name}
          <img src={p.imageUrl} alt='' height={50} />
        </li>
      ))}
    </ul>
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
