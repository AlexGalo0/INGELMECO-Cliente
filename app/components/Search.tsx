"use client";
import algoliasearch from "algoliasearch";
import Image from "next/image";

import { InstantSearch, SearchBox, Hits ,Pagination ,Highlight } from "react-instantsearch";

const APPLICATION_ID = "8UD7UMU1WD";
const SEARCH_API_KEY = "b0241e4997219d7d8be22a932109b074";

const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
type HitType = {
  objectID: string;
  nombreProducto: string;
  descripcionProducto: string;
  categoriaProducto: string;
  marcaProducto: string;
  urlImagen: string;
};
function Hit({ hit }: { hit: HitType }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg shadow-md p-4 mb-4 text-white max-w-sm ">
      <div className="flex justify-center">
        <Image src={hit.urlImagen} alt="texto" width="200" height="200" />
      </div>
      <p className="text-2xl font-bold pt-2">{hit.nombreProducto}</p>
      <p className="text-lg pt-5">{hit.descripcionProducto}</p>
      <p className="text-sm pt-3">Categoria: {hit.categoriaProducto}</p>
      <p className="text-sm pt-3">Marca: {hit.marcaProducto}</p>
      <div className="flex justify-center pt-3">
        <button className="bg-[#048C88]  p-2 rounded-md transition-all duration-300 hover:scale-105 ">Visitar Producto</button>
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="ingelmeco_productos">
      <SearchBox className="search-bar" />
      <div className="flex justify-center pt-8">
        <Hits hitComponent={Hit} className="" />
      </div>
      <div >
      <Pagination className="pagination" />

      </div>
    </InstantSearch>
  );
}