import DisplayData from "./svgs/DisplayData";

const Main: React.FC = () => {
  return (
    <div>
  <div className="bg-[#1E1E1E] p-5 pt-8 lg:flex justify-evenly">
        <div className="w-full lg:w-1/2 mr-2 lg:mx-auto">
          <h2 className="text-[#048C88] text-4xl font-bold">Historia</h2>
          <p className="text-white pt-5 max-w-[600px] text-lg pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta sit nesciunt sunt dignissimos, tempore quasi harum voluptate aut repellat possimus cum minima at, officiis maxime eaque asperiores incidunt ducimus.
            Debitis eveniet qui hic a ipsum. Quaerat alias officiis maxime incidunt vitae. Cumque provident perspiciatis totam modi deserunt veniam animi, corrupti excepturi nulla dolorem ullam nemo harum alias repudiandae tenetur.
            Quidem adipisci, eos quae rerum nemo praesentium, illum nobis quia voluptatem ducimus eligendi, asperiores exercitationem ex est perferendis nihil cum quasi quod? Provident fugit nisi saepe molestiae iure natus magni?
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
