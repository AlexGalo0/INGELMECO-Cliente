"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";

import { Carousel } from "../../components/Carousel";
import { getDownloadURL, ref } from "firebase/storage";
import {LoadingSpinner} from "@/app/components/LoadingSpinner";
import Link from "next/link";
type Producto = {
  nombreProducto: string | null;
  categoriaProducto: string | null;
  descripcionProducto: string | null;
  marcaProducto: string | null;
  subcategoriaProducto: string | null;
  urlImagen: string | null;
  urlImagenSecundaria: string | null;
  urlPdf: string | null;
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
  const [mobile,setMobile] = useState<boolean>();
  const handleDownloadPdf = async () => {
    if (producto && producto.urlPdf) {
      try {
        const pdfRef = ref(storage, producto.urlPdf);
        const url = await getDownloadURL(pdfRef);
  
        // Check if the user is on a mobile device
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)  || navigator.userAgent.match(/iPad/i) ||navigator.userAgent.indexOf('Mobile') !== -1){
          // If on a mobile device, open the PDF in a new tab
          setMobile(true)
          window.open(producto.urlPdf, '_blank');
        } else {
          // If on a desktop, trigger the download as before
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank"; // Opens in a new tab (optional)
  
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error("Error al descargar el archivo PDF:", error);
      }
    }
  };

  if (producto === null) {
    return <LoadingSpinner />;
  }

  if(mobile){
    return <h1>Estas desde celular</h1>
  }
  const phoneNumber = '94987477';

  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <div className="flex flex-wrap py-4">
        <div className="w-full md:w-1/2 p-4 pl-10">
          {producto.urlImagen ? (
            <Carousel
              imageUrl1={producto.urlImagen}
              imageUrl2={producto.urlImagenSecundaria || ""}
            />
          ) : (
            <div>No existe imagen</div>
          )}
          <div className="text-black font-bold text-2xl mt-4">
            Especificaciones
          </div>
          <p className="text-black font-bold text-lg">
            Categoría:{" "}
            <span className="font-normal text-base">
              {producto.categoriaProducto || ""}
            </span>
          </p>
          <h3 className="text-black font-bold text-lg">
            Marca:{" "}
            <span className="font-normal text-base">
              {producto.marcaProducto || ""}
            </span>
          </h3>
          {producto.subcategoriaProducto && (
            <p className="text-black font-bold text-lg">
              Subcategoría:{" "}
              <span className="font-normal text-base">
                {producto.subcategoriaProducto}
              </span>
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-black font-bold text-3xl my-4">
            {producto.nombreProducto || ""}
          </h1>
          <p className="text-xl my-4">
            {producto.descripcionProducto || "Producto vendido por INGELMECO"}
          </p>
          <div className="flex flex-col max-w-[250px]">
            <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}>
            <button className="bg-[#048C88] rounded-lg p-2 text-white font-bold hover:scale-105 transition-all duration-100 my-4">
              Preguntar por Whatsapp
            </button>
            </Link>
            {producto.urlPdf ? (
              <>
                <button
                  className="bg-[#048C88] rounded-lg p-2 text-white font-bold hover:scale-105 transition-all duration-100 my-4"
                  onClick={handleDownloadPdf}
                >
                  Descargar Ficha Tecnica
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
