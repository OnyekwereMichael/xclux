import Image from "next/image";
import HeroBanner from "./component/HeroBanner";
import Product from "./component/Product";

export default function Home() {
  return (
   <div>
     <HeroBanner />
     <Product />
   </div>
  );
}
