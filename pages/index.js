import { useEffect } from 'react';
import productService from '../services/products';

export default function Home({ products }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const products = await productService.getAll();
  return {
    props: {
      products,
    },
  };
}
