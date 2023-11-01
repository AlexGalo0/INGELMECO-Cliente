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
    <div className="">
      <h1>Nombre: {producto.nombreProducto || "No existe"}</h1>
      <h1>Categoria: {producto.categoriaProducto || "No existe"}</h1>
      <h1>Descripcion: {producto.descripcionProducto || "No existe"}</h1>
      <h1>Marca: {producto.marcaProducto || "No existe"}</h1>
      <h1>SubCategoria: {producto.subcategoriaProducto || "No existe"}</h1>
      {producto.urlImagen ? (
        <Image src={producto.urlImagen} alt="" width={100} height={100} />
      ) : (
        <div>No existe imagen</div>
      )}
      {producto.urlImagenSecundaria ? (
        <Image src={producto.urlImagenSecundaria} alt="" width={100} height={100} />
      ) : (
        <div>No existe imagen secundaria</div>
      )}
    </div>
  );
};

export default Producto;