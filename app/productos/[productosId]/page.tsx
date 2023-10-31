"use client";

import { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
const Producto = (params: any) => {
  const {
    params: { productosId },
  } = params;
  const fetchProducts = async () => {
    const docRef = doc(db, "productos", productosId);
    try {
      const querySnapshot = await getDoc(docRef);
      console.log(querySnapshot.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <h1>Producto Especifico {productosId}</h1>
    </div>
  );
};

export default Producto;
