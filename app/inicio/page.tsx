import React from "react";
import Card from "../components/Card";
import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/Carousel";

const Inicio: React.FC = () => {
  return (
    <section>
      <div className=" p-5 pt-8 lg:flex justify-evenly animate-fade-down animate-once animate-ease-linear">
        <div className="w-full max-w-[600px] mx-auto overflow-hidden ">
          <Image
            alt="Imagen de Inicio de Producto"
            src={"/images/PanelesInicio.jpg"}
            width={2000}
            height={2000}
          ></Image>
        </div>
        <div className="w-full lg:w-1/2 mr-2 lg:mx-auto">
          <div className="flex justify-center items-center">
            <h1 className="pt-4 text-[#048C88] text-4xl font-bold">
              Somos Ingelmeco
            </h1>
          </div>

          <div className="pt-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              culpa et, dolorem aut sapiente cupiditate consequatur. Quisquam
              voluptatibus omnis minima at illo? Beatae dolorem sunt quas nulla!
              Exercitationem,mmodi sunt eveniet qui iusto eos odit minus vero
              minima dolore ipsum beatae quibusdam reiciendis cupiditate
              suscipit voluptatum illum. A ex fugit, magnam deleniti, doloribus,
              optio incidunt fuga hic harum laudantium quibusdam. Quaerat
              officia quibusdam earum natus assumenda, accusamus fuga maxime
              quasi velit sunt corrupti asperiores beatae, atque magni.
            </p>
          </div>
          <div className="pt-6 flex justify-center items-center">
            <Link href="/">
              <button
                type="button"
                className="text-white bg-[#048C88] hover:bg-[#057E79] focus:ring-4 focus:outline-none focus:ring-[#057E79] font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-[#057E79] dark:hover:bg-[#046C68] dark:focus:ring-[#046C68] transition-all duration-300 hover:scale-110"
              >
                Nuestro Catálogo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de productos de SIEMENS */}
      <div className="bg-[#202020] pt-3 text-center pb-7">
        <div className="mx-auto max-w-full lg:max-w-[800px] animate-fade-left animate-once animate-ease-linear">
          <h2 className=" text-2xl font-bold text-[#eee1e1] ">
            SIEMENS Nuestra Especialidad
          </h2>
          <p className="text-dark p-4 text-lg text-[#eee1e1]">
            Uno de los principales orgullos para INGELMECO es ser los
            distribuidores oficiales de SIEMENS en Honduras , por lo cual
            contamos con una amplia gama de produtos de la marca.
          </p>
        </div>
        <div className="grid gap-10 px-14 2xl:gap-36 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3 animate-fade-right animate-once animate-ease-linear">
          <div>

          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Producto 1"
            description={"Producto 1"}
            />
            </div>
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Producto 1"
            description={"Producto 1"}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Producto 1"
            description={"Producto 1"}
          />
        </div>
      </div>

      {/* Sección de las Marcas */}
      <div className="bg-[#eee1e1] pt-3 text-center pb-7 border-b-[30px] ">
        <div className="mx-auto max-w-full lg:max-w-[680px]">
          <h2 className="text-[#1E1E1E] text-2xl font-bold px-3">
            Nuestras Marcas
          </h2>
          <p className="text-white p-4 text-lg"></p>
        </div>
        <div className="grid gap-10 px-14 2xl:gap-36 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3 ">
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />{" "}
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />{" "}
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="ABB"
            description={""}
          />
        </div>
      </div>
    </section>
  );
};
export default Inicio;
