import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "products"]{
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  new,
  colors,
  sizes,
  slug?,
  
}`;
export const  singleProductQuery  = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    slug?,
    
  }`;


// Fetch only the first 4 products
export const fourProducts = groq`*[_type == "products"][0..3]{
  _id,
  name,
  price,
  "imageUrl": image.asset->url,
  "slug": slug.current,
}`;

export const topSelling = groq`*[_type == "products"][4..7]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current,
  }`;

  
export const casual = groq`*[_type == "products"][4..12]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current,
  }`;
