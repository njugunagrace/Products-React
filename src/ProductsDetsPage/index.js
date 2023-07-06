import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";
import  {AiFillStar} from "react-icons/ai";
import { Link,use } from 'react-router-dom';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='prod'>
      <h1>Product Details</h1>
      <div className='prods'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>Ksh {product.price}</p>
        <p>{product.rating} <span className='icons'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span></p>

      </div>
    </div>
  );
};
export default ProductDetailsPage;





