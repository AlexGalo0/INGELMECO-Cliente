import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, imageSrc, imageAlt, description } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white text-center pb-5">{title}</h1>

      <Image
        className="w-1/2 h-1/2 object-contain"
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={400}
      />
      <p className="text-center text-white pt-5">{description}</p>
    </div>
  );
};

export default ProductCard;
