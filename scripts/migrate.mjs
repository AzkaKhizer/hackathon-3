import { createClient } from '@sanity/client';
import "dotenv/config";

const client = createClient({
  projectId: '6zd1nxdv', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  useCdn: true,                // Use CDN for faster response times
  apiVersion: '2025-01-13',    // Adjust the API version as needed
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Store the token securely
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer); // For Node.js. Replace with browser-safe logic if needed.

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image (${imageUrl}):`, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    console.log(`Uploading product: ${product.name}`);

    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes,
      };

      const createdProduct = await client.create(document);
      console.log(`Product uploaded successfully: ${createdProduct._id}`);
    } else {
      console.warn(`Skipping product ${product.name} due to image upload failure.`);
    }
  } catch (error) {
    console.error(`Error uploading product (${product.name}):`, error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log('All products imported successfully.');
  } catch (error) {
    console.error('Error fetching or importing products:', error);
  }
}

importProducts();
