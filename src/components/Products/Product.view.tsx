"use client"

import React from 'react';
import { useCart } from '$/store';
import Image from 'next/image';

const Product = () => {
    const { products, setProduct } = useCart();
    if((products as any[]).length === 0){
        return <h1>Your cart is empty</h1>
    }
  return (
    <div>
        <h1>{(products as any[]).length}</h1>
        {(products as any[]).map((data) => (
        <div>
            <Image
                src={data.image}
                height={200}
                width={200}
                alt="product-img"
              />
              <h1>{data.title}</h1>
            </div>
    ))}
    </div>
  )
}

export default Product