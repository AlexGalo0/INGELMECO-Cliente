import DisplayData from "./svgs/DisplayData";

const Main: React.FC = () => {
  return (
    <div>
      <div className="bg-[#1E1E1E] p-5 pt-8 lg:flex justify-evenly"> {/* Utilizamos clases de flexibilidad para distribución */}
        <div className="w-full lg:w-1/2 mr-2"> {/* Ajustamos el ancho para pantallas grandes */}
          <h2 className="text-[#048C88] text-4xl font-bold">Historia</h2>
          <p className="text-white pt-5 max-w-[500px] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            accusamus impedit neque velit, culpa similique delectus minima,
            totam, eaque dicta debitis ducimus? Quas ipsa eum, sequi quisquam
            consectetur rem mollitia. Accusamus fugit corporis, iste, ratione,
            omnis laborum repellat nobis architecto obcaecati explicabo quis?
            Molestiae error voluptatibus quam temporibus dolor mollitia, odit
            omnis cumque quaerat sequi eos dolore aperiam aliquam et?
          </p>
        </div>
        {/* Imagen SVG */}
        <div className="lg:ml-4"> {/* Añadimos margen izquierdo para pantallas grandes */}
          <DisplayData />
        </div>
      </div>

      {/* Sección de los valores */}
      <div className="bg-[#fdfdfd] pt-3 text-center">
        <div className="mx-auto max-w-full lg:max-w-[680px]"> {/* Ajustamos el ancho máximo para pantallas grandes */}
          <h2 className="text-[#202020] text-2xl font-bold">
            Nuestros Valores
          </h2>
          <p className="text-dark pt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            accusamus impedit neque velit, culpa similique delectus minima,
            totam, eaque dicta debitis ducimus? Quas ipsa eum, sequi quisquam
            consectetur rem mollitia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
