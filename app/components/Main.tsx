import DisplayData from "./svgs/DisplayData";

const Main: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] flex justify-evenly p-5 pt-8">
      <div className="w-1/2 mr-2">
        <h2 className="text-[#048C88] text-4xl font-bold">Historia</h2>
        <p className="text-white pt-5 max-w-[500px] text-lg "> {/* Ajustamos el margen superior */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          accusamus impedit neque velit, culpa similique delectus minima, totam,
          eaque dicta debitis ducimus? Quas ipsa eum, sequi quisquam consectetur
          rem mollitia. Accusamus fugit corporis, iste, ratione, omnis laborum
          repellat nobis architecto obcaecati explicabo quis? Molestiae error
          voluptatibus quam temporibus dolor mollitia, odit omnis cumque quaerat
          sequi eos dolore aperiam aliquam et?
        </p>
      </div>
      {/* Imagen SVG */}
      <div className="">
        <DisplayData />
      </div>
    </div>
  );
};


export default Main;
