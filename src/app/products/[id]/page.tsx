import React from 'react';
import Image from 'next/image';
import { sdk } from '@/data/client';
import { Button } from '@/components/ui/button';
import UpdateProductModal from './UpdateProductModal';
import { deleteProduct, updateProduct } from '../../../data/contentfulManagement';
import { notFound, redirect } from 'next/navigation';


interface ProductProps {
  params: {
    id: string;
  };
}

interface Product {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  imageUrl: string;
}

async function getProduct(id: string): Promise<Product> {
  try {
    const data = await sdk.GetProductById({ id } ,  {
      cache: 'no-store',
    });
    
    if (!data.product) {
      notFound();
    }
    
    return {
      ...data.product,
      title: data.product.title || "Untitled",
      description: data.product.description || "No description available",
      imageUrl: data.product.imageUrl || "default-image-url",
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.id);

  async function handleUpdate(formData: FormData) {
    'use server'
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const imageUrl = formData.get('imageUrl') as string;

    await updateProduct(params.id, { title, description, imageUrl });
    redirect(`/products/${params.id}`);
  }

  async function handleDelete() {
    'use server'
    await deleteProduct(params.id);
    redirect('/');
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <div className="relative w-full h-96 mb-6">
        <Image
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-lg mb-4">{product.description}</p>
      <div className="flex space-x-4">
        <UpdateProductModal product={product} />
        <form action={handleDelete}>
          <Button variant="destructive">Delete Product</Button>
        </form>
      </div>
    </div>
  );
}