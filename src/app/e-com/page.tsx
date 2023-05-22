import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Product from "$/components/Products";
import { useState } from "react";



const Cart = dynamic(() => import("$/components/Cart"), {
  ssr: false,
});
export default async function Page(props: any) {

  const res = await fetch("https://fakestoreapi.com/products",{next: {revalidate: 10} });
  const data: any[] = await res.json();
  console.log(data);
  return (
    <div>
      <div className="flex gap-5">
        <div>
          {data.map((data: any, i: number, self: any) => (
            <div>
              <Image
                src={data.image}
                height={200}
                width={200}
                alt="product-img"
              />
              <h1>{data.title}</h1>
              <Cart productData={data} products={self} />
              <Link href={`e-com/${data.id}`}>
                <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ml-5">
                  Detail Page
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div>
        <Product/>
        </div>
      </div>
    </div>
  );
}
