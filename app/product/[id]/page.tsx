import React from 'react';
import { client } from "@/sanity/lib/client";
import Productdetail from '../../components/Productdetail';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  // Await the params object to extract the id
  const { id } = await params;

  const query = `*[ _type == "product" && id == $id]{
    name,
    "id": id,
    price,
    description,
    category,
    stockLevel,
    "image": image.asset._ref,
    "images": gallery[].asset._ref
  }[0]`;

  const product = await client.fetch(query, { id });

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-600">Product not found</h1>
      </div>
    );
  }

  return <Productdetail product={product} />;
};

export default page;