import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
 
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className= "text-xl mb-2">{product.title}</CardTitle>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter>
             <Link href={`/products/${product.id}`}>
             <Button variant="outline" className="w-full">View Details</Button>
             </Link>

        

      </CardFooter>
    </Card>
  );
};

export default ProductCard;