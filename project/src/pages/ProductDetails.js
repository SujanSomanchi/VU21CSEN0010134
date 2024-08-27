import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetails;
