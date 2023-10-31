"use client"
const Producto= (params:any) => {
    const { params : {productosId} } = params;
    console.log(productosId);
    return (
      <div className="">
      <h1>Producto Especifico</h1>
      </div>
    );
  };
  
  export default Producto;