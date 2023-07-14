

import React from "react";
import { urlFor } from "../client";
import { Link } from "react-router-dom";

const Product = ({ product: { image, name, slug, price } }) => {
  

  return (
    <>
    <div></div>
 <main>
      
 <div>
    <Link to={"/project/" + slug.current} key={slug.current}>
      <div className="product-container">
        <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className="product-image"
        />
        <p className="product-name">{name}</p>
        {/* <p className="product-price">${price}</p> */}
      </div>
    </Link>
    </div>
 </main>


    

    
    </>
    

  );
};

export default Product;


// import React from "react";
// import { urlFor } from "../client";
// import { Link } from "react-router-dom";

// const Product = ({ work: { mainImage, name, slug, price } }) => {
  

//   return (
//     <>
//     <div></div>
//  <main>
      
//  <div>
//     <Link to={"/project/" + slug.current} key={slug.current}>
//       <div className="product-container">
//         <img
//           // src={urlFor(mainImage && mainImage[0])}
//           src={mainImage}
//           width={250}
//           height={250}
//           className="product-image"
//         />
//         <p className="product-name">{name}</p>
//         {/* <p className="product-price">${price}</p> */}
//       </div>
//     </Link>
//     </div>
//  </main>


    

    
//     </>
    

//   );
// };

// export default Product;
