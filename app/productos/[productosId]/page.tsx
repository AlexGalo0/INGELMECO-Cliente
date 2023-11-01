"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Image from "next/image";

type Producto = {
  nombreProducto: string;
  categoriaProducto: string;
  descripcionProducto: string;
  marcaProducto: string;
  subcategoriaProducto: string;
  urlImagen: string;
  urlImagenSecundaria: string;
};




const Producto = (params: any) => {
  const {
    params: { productosId },
  } = params;
  const [producto, setProducto] = useState<Producto>({} as Producto);
  const fetchProducts = async () => {
    const docRef = doc(db, "productos", productosId);
    try {
      const querySnapshot = await getDoc(docRef);
      setProducto(querySnapshot.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <h1>Nombre: {producto.nombreProducto}</h1>
      <h1>Categoria: {producto.categoriaProducto}</h1>
      <h1>Descripcion: {producto.descripcionProducto}</h1>
      <h1>Marca: {producto.marcaProducto}</h1>
      <h1>SubCategoria: {producto.subcategoriaProducto}</h1>
      <Image src={producto.urlImagen} alt="" width={100} height={100} />
      <Image src={producto.urlImagenSecundaria} alt="" width={100} height={100} />
    </div>
  );
};

export default Producto;
