import React, { useState, useEffect } from "react";
import { client, urlFor } from "../client";
import { Link } from "react-router-dom";

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
      title,
      details,
      image,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt,
      }

  }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
<>
<div>
<h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

        
        {postData &&
          postData.map((post, slug) => (
        
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>

              <div className="product-container">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  key={post.mainImage.asset._id}
                  width={250}
                  height={250}
                  className="product-image"
                />
                <p className="product-name">{post.title}</p>
              </div>
              
              {/* <p className='product-name'>{post.data}</p> */}
            </Link>
          ))}
      </div>
</>

 
 
  );
};

export default Post;

// import React, {useState, useEffect} from 'react';
// import sanityClient from '../client';
// import { Link } from 'react-router-dom';

// export default function Post (){
//   const [postData, setPost]= useState(null);

//   useEffect(()=>{
//     sanityClient.fetch(`*[_type == "post"]{

//       title,
//       slug,
//       mainImage{
//         asset->{
//           _id,
//           url
//         },
//         alt
//       }
//     }`)
//     .then((data)=> setPost(data))
//     .catch(console.error)
//   }, []);

//   return (
//     <main>
//       <section>
//         <h1>
//           Blog Post Page
//         </h1>

//         <h2>
//           Welcome to the Blog Post Page
//         </h2>
//         <div>
//           {
//             postData && postData.map((post, index) =>(

// <article>
// <Link to={"/post" + post.slug.current} key={post.slug.current} >
//   <span key={index}/>
//   <img
//   a
//   src={post.mainImage.asset.url}
//   alt={post.mainImage.alt}
//   key={post.mainImage.asset._id}

//   />
// <span height="100px">
//   <h3>

//     hey its me
//   </h3>
// </span>
// </Link>
// </article>
//           ))}

//         </div>
//       </section>
//     </main>
//   )
// }
