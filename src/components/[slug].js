import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import { client, urlFor } from '../client';
import Product from './Product';
import { Loader } from '@react-three/drei';


export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const[singlePost, setSinglePost]= useState(null);
  const [products, setProducts] = useState([]);
  const { slug } = useParams();

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
      const productsQuery = `*[_type == "product"]`;

      const fetchedProduct = await client.fetch(query);
      const fetchedProducts = await client.fetch(productsQuery);

      setProduct(fetchedProduct);
      setProducts(fetchedProducts);

      client.fetch(`*[slug.current == "${slug}"]{
        title,
        image,
        _id,
        slug,
  
        details,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "authname": author-> name, "authorImage": author-> image,"autbio": author-> bio     
       
      }`).then((data)=> setSinglePost(data[0]))
      .catch(console.error);
    };
    fetchProduct();
  }, [slug]);

  if (!product ||!singlePost|| !products.length) return <Loader/>;

  const { image, name, details, price, author } = product;
  
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
            
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
       
          <h5>Author:</h5>
         
          <img src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            width={100}
            height={100}
            

            className="product-image"
            />
             <p className="price">{singlePost.authname}</p>
          <p className="price">{singlePost.autbio}</p>
          <div className="quantity">
           
           
          </div>
   
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>Featured Works</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )

};


