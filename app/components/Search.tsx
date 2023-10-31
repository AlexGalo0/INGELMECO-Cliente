"use client";
import algoliasearch from "algoliasearch";
import Image from "next/image";

import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

const APPLICATION_ID = "8UD7UMU1WD";
const SEARCH_API_KEY = "b0241e4997219d7d8be22a932109b074";

const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);

function Hit({ hit }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg shadow-md p-4 mb-4 text-white max-w-sm">
       <div className="flex justify-center">
        <Image src={hit.urlImagen} alt="texto" width="200" height="200" />
      </div>
      <h1 className="text-2xl font-bold pt-2">{hit.nombreProducto}</h1>
      <p className="text-lg">{hit.descripcionProducto}</p>
      <p className="text-sm">Categoria: {hit.categoriaProducto}</p>
      <p className="text-sm">Marca: {hit.marcaProducto}</p>
     <div className="flex justify-center">

      <button className="bg-red-500 rounded-r-lg">Ver Producto</button>
     </div>
    </div>
  );
}

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="ingelmeco_productos">
      <SearchBox className="search-bar" placeholder="Busca tu producto" />
      <div className="flex justify-center pt-8">
        <Hits hitComponent={Hit} className="" />
      </div>
    </InstantSearch>
  );
}
