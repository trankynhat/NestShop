'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styles from '../../styles/product.module.css';
export default function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams(); // Sử dụng useParams thay cho useRouter

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productPage}>
      <h1>Product Details</h1>
      <h2 className={styles.productTitle}>{product.name}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <Image 
        src={`/images/${product.imageUrl}`} 
        alt={product.name} 
        width={300} 
        height={300} 
        className={styles.productImage}
        style={{ objectFit: 'cover' }} 
      />
    </div>
  );
}
