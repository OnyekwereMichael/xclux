'use client'
import { AiOutlinePlus, AiOutlineMinus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import React, { useState, useEffect, useCallback } from 'react';
// import { toast } from 'react-hot-toast';
import { client } from '../../lib/client';
import Product from '../../component/Product';

interface ProductData {
  _id: string;
  name: string;
  price: number;
  slug: string;
  details: string;
  images: string[];
}

const Productdetails = ({ params }:{params:{slug:string}}) => {
  const [productDetail, setProductDetail] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  // Fetch product data
  const getData = async (slug: string)=> {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
      _id,
      name,
      price,
      "slug": slug.current,
      "details": details,
      "images": image[].asset->url
    }`;
    const data = await client.fetch(query);
    return data || null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(params.slug);
        setProductDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !productDetail) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="product-detail-image hover:transistion-all hover:duration-500">
            <img
              src={productDetail.images[index]}
              alt={productDetail.name}
              className="main-product-image "
            />
            {/* <span className='absolute left-0 top-20 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Sale</span> */}
          </div>

          <div className="small-images-container">
            {productDetail.images.map((image, i) => (
              <div key={i}>
                <img
                  className="selected-image"
                  src={image}
                  alt={`Thumbnail ${i}`}
                  width="70"
                  height="70"
                  onClick={() => setIndex(i)}
                  style={{
                    cursor: 'pointer',
                    border: index === i ? '4px solid #000' : 'none',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{productDetail.name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{productDetail.details}</p>
          <p className="price">NGN {productDetail.price}</p>

          <div className="quantity my-2 max-sm:my-[2px]">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" >
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            <button type="button" className="add-to-cart" >
              Add to Cart
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track mt-10">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
