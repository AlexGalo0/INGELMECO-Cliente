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

const APPLICATION_ID = "II7IZ0BHLU";
const SEARCH_API_KEY = "e1c8eaa84d0b914b676608b0c858d5a7";
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
        <Image src={hit.urlImagen} className="w-full h-36 object-contain" alt="texto" width={900} height={100} loading="lazy" />
      </div>
      <p className="text-xl font-bold pt-2">{hit.nombreProducto}</p>
      <p className="text-lg pt-5">{hit.descripcionProducto}</p>
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
        indexName="ingelmeco_web_productos"
        future={{ preserveSharedStateOnUnmount: true }}
      >
        {/* Input de Buscador (SearchBox) */}
        <div className="text-center bg-[#1E1E1E]">
            <SearchBox placeholder="Busca tus productos"/>
        </div>

        {/* Contenedor de  Todo flex sm:flex-col md:flex-col lg:flex-col xl:flex-row*/}
        <div className="grid 2xl:flex xl:flex md:flex min-h-screen pt-5">

          <div className="flex flex-col ml-6 mr-6">
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
