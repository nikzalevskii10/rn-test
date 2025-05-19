// src/data/products.ts
import {Product} from '../types/product';

const categories = ['Electronics', 'Clothings', 'Books', 'Foods', 'Sports'];
const descriptions = [
  'High quality product with amazing features',
  'Perfect for everyday use',
  'Premium quality at affordable price',
  'Best seller in its category',
  'New arrival with modern design',
];

function generateProducts(count: number): Product[] {
  return Array.from({length: count}, (_, index) => {
    const id = (index + 1).toString();
    const category = categories[index % categories.length];
    const description = descriptions[index % descriptions.length];
    const basePrice = Math.floor(Math.random() * 1000) + 1;
    const rating = {
      rate: Number((Math.random() * 2 + 3).toFixed(1)),
      count: Math.floor(Math.random() * 1000) + 50,
    };
    const stock = Math.floor(Math.random() * 300) + 20;
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    const createdAt = date.toISOString();
    const updatedAt = new Date(
      date.getTime() + Math.random() * 15 * 24 * 60 * 60 * 1000,
    ).toISOString();

    return {
      id,
      title: `${category.slice(0, -1)} ${id}`,
      price: basePrice,
      description,
      category,
      image: `https://picsum.photos/seed/${id}/200/300`,
      rating,
      stock,
      createdAt,
      updatedAt,
    };
  });
}

export const products: Product[] = generateProducts(1000);
