"use client";
import algoliasearch from "algoliasearch";
import Image from "next/image";
import Link from "next/link";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
} from "react-instantsearch";
import { Panel } from "./Panel";

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
    <div className="bg-[#1E1E1E] rounded-lg shadow-md p-4 h-full text-white max-w-sm">
      <div className="flex justify-center">
        {/*max-w-full h-auto   recomendadas por firebase*/}
        <Image src={hit.urlImagen} className="w-full h-36" alt="texto" width={900} height={100} priority />
      </div>
      <p className="text-xl font-bold pt-2">{hit.nombreProducto}</p>
      {/* <p className="text-lg pt-5">{hit.descripcionProducto}</p> */}
      <p className="text-sm">Categoria: {hit.categoriaProducto}</p>
      <p className="text-sm">Marca: {hit.marcaProducto}</p>
      <div className="flex justify-center">
        <Link href={`/productos/${hit.objectID}`}>
          <button className="bg-[#048C88]  p-2 rounded-md transition-all duration-300 hover:scale-105 ">
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <div className="flex min-h-screen mx-auto flex-col">
      <InstantSearch
        searchClient={searchClient}
        indexName="ingelmeco_productos"
        future={{ preserveSharedStateOnUnmount: true }}
      >
        {/* Input de Buscador (SearchBox) */}
        <div className="text-center py-2 bg-[#1E1E1E]">
            <SearchBox placeholder="Busca tus productos"/>
        </div>

        {/* Contenedor de  Todo*/}
        <div className="flex min-h-screen pt-5">

          {/* Contenedor de Selectores  sidebar  sm:flex flex-col p-3 xl:items-start fixed xl:ml-4*/}
          <div className="flex flex-col ml-6 mr-20">
            <Panel header="Marca">
              {" "}
              {/* Titulo de los selectores */}
              <RefinementList
                attribute="marcaProducto"
                escapeFacetValues={false}
                className=""
              />
            </Panel>

            <Panel header="Categoría">
              {" "}
              {/* Titulo de los selectores */}
              <RefinementList attribute="categoriaProducto" className="" />
            </Panel>
          </div>

          {/* Contenedor de Hits */}
          <div className="w-full">
            <Hits hitComponent={Hit} />
          </div>

        </div>

        <div className="pagination">
          <Pagination showFirst={true} />
        </div>
      </InstantSearch>
    </div>
  );
}
