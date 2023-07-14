import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {client, urlFor} from '../client'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react";
import { Loader } from '@react-three/drei';

// const builder = imageUrlBuilder(client);
// function urlFor(source){
//   return builder.image(source)
// }


export default function SinglePost(){
  const[singlePost, setSinglePost]= useState(null);
  const{slug} =useParams();
  const [index, setIndex] = useState(0);
// "name": author-> name, "authorImage": author-> image    
  useEffect(()=>{
    client.fetch(`*[slug.current == "${slug}"]{
      title,
      image,
      _id,
      slug,
      bio,

      details,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "authname": author-> name, "authorImage": author-> image ,"autbio": author-> bio ,
     
    }`).then((data)=> setSinglePost(data[0]))
    .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div> <Loader/></div>



  return(
  
    <main>
     
      <article>
        <header>
        
          <div>
            <h1>{singlePost.title}</h1>
            <div> 
            <img src={urlFor(singlePost.mainImage).url()}
            alt={singlePost.name}
            height={"300px"}
            />
            </div>
           

            <img src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            width={250}
            height={250}
            

            className="product-image"
            />
             <p>{singlePost.authname}</p>
          </div>

      
          <div>
            {singlePost.title}
            <p>{singlePost.details}</p>
         
{singlePost.autbio}
   
        

     
          {/* <img src={singlePost.mainImage.asset.url}/> */}
          </div>

        
        </header>
             <div> <BlockContent blocks={singlePost.body} projectId="p5jxu29g" dataset='production'/></div> 
      </article>
 
    </main>
     
  )

}