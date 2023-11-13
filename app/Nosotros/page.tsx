import Card from "../components/Card";
import DisplayData from "../components/svgs/DisplayData";

const Nosotros: React.FC = () => {
  return (
    <section>
      <div className="bg-[#1E1E1E] p-5 pt-8 lg:flex justify-evenly">
        <div className="w-full lg:w-1/2 mr-2 lg:mx-auto">
          <h2 className="text-[#048C88] text-4xl font-bold">Historia</h2>
          <p className="text-white pt-5 max-w-[600px] text-lg pb-3">
            Con más de dos décadas de historia, Ingelmeco se estableció en San
            Pedro Sula, Honduras, para liderar la ingeniería y la tecnología.
            Desde el inicio, hemos sido proveedores oficiales de Siemens,
            ofreciendo productos avanzados como contactores, guardamotores y
            PLCs. A lo largo de los años, hemos ampliado nuestra presencia y
            participado en proyectos clave en Honduras, contribuyendo al
            desarrollo industrial. Nos destacamos por nuestra dedicación a la
            calidad, innovación y servicio al cliente.
          </p>
        </div>
        <div className="w-full max-w-[400px] mx-auto overflow-hidden">
          <DisplayData />
        </div>
      </div>

      {/* Sección de los valores */}
      <div className="bg-[#fdfdfd] pt-3 text-center pb-7">
        <div className="mx-auto max-w-full lg:max-w-[680px]">
          {" "}
          {/* Ajustamos el ancho máximo para pantallas grandes */}
          <h2 className="text-[#202020] text-2xl font-bold">
            Nuestros Valores
          </h2>
          <p className="text-dark pt-3 text-lg mb-4">
            En Ingelmeco, nuestros valores fundamentales son la brújula que guía
            nuestro actuar diario, tanto dentro como fuera de la empresa. Nos
            esforzamos por reflejar estos principios en cada aspecto de nuestro
            trabajo:
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Compromiso con el Cliente"
            description="Nuestros clientes son la piedra angular de nuestro negocio. 
        Nos comprometemos a comprender sus necesidades, superar sus expectativas y construir relaciones a largo plazo basadas en la confianza."
          />
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Excelencia"
            description="Buscamos la excelencia en todo lo que hacemos. Desde la selección de productos hasta la ejecución de proyectos, nos esforzamos por alcanzar los más altos estándares."
          />
          <div className="mb-2"></div>
          <Card
            backgroundColor="#1E1E1E"
            imageSrc="/images/exito.webp"
            textColor="#FFFFFF"
            title="Integridad"
            description="Actuamos con integridad en todas nuestras interacciones. Mantenemos altos estándares éticos, siendo honestos y transparentes en cada decisión y acción.
        "
          />
          <div className="mb-2"></div>
        </div>
      </div>

      {/* Sección de los Servicios */}
      <div className="bg-[#1E1E1E] pt-3 text-center pb-7">
        <div className="mx-auto max-w-full lg:max-w-[680px]">
          {" "}
          {/* Ajustamos el ancho máximo para pantallas grandes */}
          <h2 className="text-white text-2xl font-bold">
            Nuestros Servicios en Ingelmeco
          </h2>
          <p className="text-white pt-3 text-lg mb-4">
            En Ingelmeco, nos dedicamos a proporcionar soluciones integrales en
            el campo de la ingeniería y la tecnología. Nuestra oferta de
            servicios abarca una amplia gama de áreas para satisfacer las
            necesidades cambiantes de nuestros clientes:
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <Card
            backgroundColor="#FFFFFF"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Proyectos de Ingeniería"
            description="Nos especializamos en la ejecución de proyectos de ingeniería, desde la conceptualización hasta la implementación, asegurando resultados exitosos y a medida para cada cliente."
          />
          <div className="mb-2"></div>
          <Card
            backgroundColor="#FFFFFF"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Elaboración de Paneles Eléctricos"
            description="Diseñamos y construimos paneles eléctricos a medida, garantizando la eficiencia y seguridad en el control de sistemas eléctricos."
          />
          <div className="mb-2"></div>
          <Card
            backgroundColor="#FFFFFF"
            imageSrc="/images/edit-tools.webp"
            textColor="#202020"
            title="Soporte Técnico"
            description="Nuestro equipo altamente capacitado brinda un sólido soporte técnico para mantener el funcionamiento eficiente de los sistemas implementados."
          />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
