"use client"
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
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-[400px]">
      {producto.urlImagen ? (
        <Image src={producto.urlImagen} alt="Imagen de Producto" width={250} height={250} />
      ) : (
        <div>No existe imagen</div>
      )}
      <h1 className="text-black font-bold text-2xl">{producto.nombreProducto || "No existe"}</h1>
      <p className="text-xl"> {producto.descripcionProducto || ""}</p>
      <h3 className="text-black font-bold">Especificaciones</h3>
      <h3>Categoria: {producto.categoriaProducto || ""}</h3>
      <h3>Marca: {producto.marcaProducto || ""}</h3>
      
      <h1>SubCategoria: {producto.subcategoriaProducto || "No existe"}</h1>
      <button className="bg-[#048C88] rounded-lg p-2 text-white font-bold">Preguntar por Whatsapp</button>
      {producto.urlImagenSecundaria ? (
        <Image src={producto.urlImagenSecundaria} alt="" width={100} height={100} />
      ) : (
        null
      )}
    </div>
  );
};

export default Producto;