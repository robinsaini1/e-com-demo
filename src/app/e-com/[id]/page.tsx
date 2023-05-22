import dynamic from "next/dynamic";
import Image from "next/image";
export const metadata = {
    title: 'Detail Product Page',
    description: 'Generated by create next app',
  }

const Cart = dynamic(() => import("$/components/Cart"), {
  ssr: false,
});
export default async function Page(props: any) {
  const {
    params: { id },
  } = props;
  const res = await fetch(
    "https://fakestoreapi.com/products" + `/${id}`
  );
  const data: any = await res.json();

  return (
    <div>
          <Image src={data.image} height={200} width={200} alt="product-img"/>
      <h1>{data.title}</h1>
      {/* <h3>{data.username}</h3>
      <h3>{data.email}</h3> */}
    </div>
  );
}
