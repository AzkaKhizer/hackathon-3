import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import AddToCartButton from "@/components/addtocartbutton";

interface ProductPageProps {
  params: { slug: string }; // `params` is directly an object, not a Promise
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
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
      slug
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Destructure slug directly
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-2xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="aspect-square">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
