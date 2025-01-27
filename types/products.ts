export type Product = {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string; // Updated to fetch the URL directly
    category?: string;
    discountPercent?: number;
    new?: boolean;
    colors?: string[];
    sizes?: string[];
    slug?:{
      _type:"slug"
      current:string;
    }
  };
  // types.ts (Optional: This can be in the same file if preferred)
export interface IProduct {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  description?: string; // Ensure you include this if available
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}
