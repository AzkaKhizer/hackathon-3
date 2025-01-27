"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { casual } from "@/sanity/lib/queries"; 
import { Product } from "../../../types/products";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/addtocartbutton";

export default function TopSelling() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(casual);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="mt-6 w-full h-full max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded-[20px] p-4 m-4 shadow-sm transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Link href={`/products/${product.slug}`} passHref>
                {product.imageUrl && (
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[20px]"
                    />
                  </div>
                )}
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-700 font-semibold">${product.price}</p>
              </Link>
              <AddToCartButton product={product} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>
    </div>
  );
}

