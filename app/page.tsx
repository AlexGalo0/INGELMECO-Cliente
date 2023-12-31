import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "./components/ProductCard";

const Inicio: React.FC = () => {
    return (
        <main>
            <div className=" p-5 pt-8 lg:flex justify-evenly animate-fade-down animate-once animate-ease-linear ">
                <div className="w-full max-w-[600px] mx-auto overflow-hidden">
                    <Image
                        alt="Imagen de Inicio de Producto"
                        src={"/images/PanelesInicio.jpg"}
                        className="shadow-2xl rounded"
                        width={900}
                        height={100}
                    />
                </div>
                <div className="w-full lg:w-1/2 mr-2 lg:mx-auto">
                    <h1 className="pt-4 text-[#048C88] text-center text-4xl font-bold">
                        INGELMECO
                    </h1>

                    <p className="p-4">
                        En Ingelmeco damos vida a sus proyectos eléctricos. Como líderes
                        en la venta de productos eléctricos de primera calidad, desde
                        contactores hasta interruptores, nos destacamos por ofrecer
                        soluciones integrales. Desde proyectos solares hasta sistemas de
                        alta, media y baja tensión, estamos aquí para hacer que sus ideas
                        brillen. Explore nuestro catálogo y descubra cómo la experiencia
                        Ingelmeco marca la diferencia en cada conexión eléctrica.
                    </p>

                    <div className="pt-6 flex justify-center items-center">
                        <Link href="/productos">
                            <button
                                type="button"
                                className="text-white bg-[#048C88] hover:bg-[#057E79] focus:ring-4 focus:outline-none focus:ring-[#057E79] font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-[#057E79] dark:hover:bg-[#046C68] dark:focus:ring-[#046C68] transition-all duration-300 hover:scale-110"
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

            <section className="bg-[#202020] pt-3 text-center pb-12">
                <div className="mx-auto max-w-full lg:max-w-[800px] animate-fade-left animate-once animate-ease-linear">
                    <h2 className=" text-2xl font-bold text-[#eee1e1] ">
                        SIEMENS , Nuestra Especialidad
                    </h2>
                    <p className="text-dark p-4 text-lg text-[#eee1e1]">
                        Uno de los principales orgullos para INGELMECO es ser los
                        distribuidores oficiales de SIEMENS en Honduras , por lo cual
                        contamos con un amplia gama de productos estrella de la marca.
                    </p>
                </div>
                <div className="grid gap-10 px-14 2xl:gap-36 lg:gap-20 sm:grid-cols-2 lg:grid-cols-3 animate-fade-right animate-once animate-ease-linear  mx-auto">
                    <ProductCard
                        description="Dispositivo de protección para motores eléctricos. Su función es desconectar la alimentación en caso de sobrecarga, evitando daños al motor al monitorear y controlar las corrientes eléctricas."
                        imageAlt="Interruptor de Siemens"
                        imageSrc="/images/SiemensProducto1.jpeg"
                        title="Guardamotor"
                    />
                    <ProductCard
                        description="Dispositivo de protección utilizado en sistemas eléctricos para monitorear la corriente que fluye hacia un motor. Su función principal es desconectar la alimentación si detecta corrientes excesivas, protegiendo así el motor contra posibles daños por sobrecarga."
                        imageAlt="Relé de Sobrecarga de Siemens"
                        imageSrc="/images/SiemensProducto2.jpg"
                        title="Rele de Sobrecarga"
                    />
                    <ProductCard
                        description="Dispositivo eléctrico utilizado para controlar el flujo de corriente en un circuito eléctrico. Actúa como un interruptor electromagnético, permitiendo o interrumpiendo la corriente eléctrica a través de sus contactos."
                        imageAlt=""
                        imageSrc="/images/SiemensProducto3.jpeg"
                        title="Contactor"
                    />
                </div>
            </section>

            {/* Sección de las Marcas */}
            <section className="bg-white pt-3 text-center pb-7">
                <div className="mx-auto max-w-full px-4 lg:px-8 xl:px-16">
                    <h2 className="text-[#202020] text-2xl font-bold mb-4 lg:mb-6">
                        Nuestras Marcas
                    </h2>
                    <div className="flex flex-wrap justify-center gap-5 ">
                        <Image
                            src={"/images/ABBLogo.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                            loading="lazy"
                        />
                        <Image
                            src={"/images/selecLogo.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                        <Image
                            src={"/images/logoSiemens.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                        <Image
                            src={"/images/sibaLogo.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                        <Image
                            src={"/images/littleFuseLogo.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                        <Image
                            src={"/images/dataKom.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                        <Image
                            src={"/images/electroniconLogo.png"}
                            alt="Marcas de Inicio de Producto"
                            className="w-[15%] aspect-3/2 object-contain"
                            width={900}
                            height={100}
                        />
                    </div>
                </div>

                <div className="p-5 lg:grid justify-evenly animate-fade-down animate-once animate-ease-linear bg-[#202020]">
                    <h4 className="text-white text-2xl font-semibold">
                        Encuéntranos en San Pedro Sula
                    </h4>
                    <div className="lg:flex m-2">
                        <div className="w-full lg:w-1/2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.4396722193837!2d-88.03002479999999!3d15.514543300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665b97a4085d0b%3A0x19e4b7e28f006a33!2sINGELMECO!5e0!3m2!1ses-419!2shn!4v1701545263650!5m2!1ses-419!2shn"
                                className="w-full h-full p-4"
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <Image
                                alt="Instalaciones de Ingelmeco SIEMENS"
                                src={"/images/ubicacionIngelmeco.jpeg"}
                                className="w-full h-full p-4"
                                width={900}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Inicio;
