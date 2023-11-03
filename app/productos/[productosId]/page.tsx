"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Image from "next/image";

type Producto = {
  nombreProducto: string | null;
  categoriaProducto: string | null;
  descripcionProducto: string | null;
  marcaProducto: string | null;
  subcategoriaProducto: string | null;
  urlImagen: string | null;
  urlImagenSecundaria: string | null;
};

interface ParamsType {
  productosId: string;
}

const Producto = ({ params }: { params: ParamsType }) => {
  const { productosId } = params;
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const docRef = doc(db, "productos", productosId);
      try {
        const querySnapshot = await getDoc(docRef);
        setProducto(querySnapshot.data() as Producto);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [productosId]);

  if (producto === null) {
    return <div className="min-h-[350px]">Cargando producto...</div>;
  }

  return (
    <div className="container mx-auto px-4">
    <div className="flex flex-wrap py-4">
      <div className="w-full md:w-1/2 p-4 pl-10">
        {/* Aumenta el margen izquierdo */}
        {producto.urlImagen ? (
          <div className="image-container">
            <Image
              src={producto.urlImagen}
              alt="Imagen de Producto"
              width={900} // Establece el ancho deseado
              height={900} // Establece el alto deseado
              className="object-contain hover:scale-105 transition-all duration-100 w-full md:w-2/3 lg:w-1/2"
            />
          </div>
        ) : (
          <div>No existe imagen</div>
        )}
        <div className="text-black font-bold text-2xl mt-4">
          {/* Aumenta el tamaño de letra */}
          Especificaciones
        </div>
        <p className="text-black font-bold text-lg">
          {/* Aumenta el tamaño de letra */}
          Categoría:{" "}
          <span className="font-normal text-base">
            {producto.categoriaProducto || ""}
          </span>
        </p>
        <h3 className="text-black font-bold text-lg">
          {/* Aumenta el tamaño de letra */}
          Marca:{" "}
          <span className="font-normal text-base">
            {producto.marcaProducto || ""}
          </span>
        </h3>
        {producto.subcategoriaProducto && (
          <p className="text-black font-bold text-lg">
            {/* Aumenta el tamaño de letra */}
            Subcategoría:{" "}
            <span className="font-normal text-base">
              {producto.subcategoriaProducto}
            </span>
          </p>
        )}
      </div>
      <div className="w-full md:w-1/2 p-4">
        {/* Elimina el margen derecho */}
        <h1 className="text-black font-bold text-3xl my-4">
          {producto.nombreProducto || ""}
        </h1>
        <p className="text-xl my-4">
          {producto.descripcionProducto || "Producto vendido por INGELMECO"}
        </p>
        <button className="bg-[#048C88] rounded-lg p-2 text-white font-bold hover:scale-105 transition-all duration-100 my-4">
          Preguntar por Whatsapp
        </button>
      </div>
    </div>
  </div>
  );
};

export default Producto;
