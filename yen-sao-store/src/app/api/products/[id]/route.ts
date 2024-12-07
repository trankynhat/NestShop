import { NextResponse } from 'next/server';

const products = [
  {
    id: '1',
    name: 'Premium Bird Nest',
    description: 'This is a premium quality bird nest product.',
    price: 300,
    imageUrl: 'product1.jpg',
  },
  {
    id: '2',
    name: 'Luxury Bird Nest',
    description: 'This bird nest is of luxury grade, perfect for health benefits.',
    price: 500,
    imageUrl: 'product2.jpg',
  },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
