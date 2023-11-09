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
    <div className="bg-[#1E1E1E] rounded-lg shadow-md p-4 mb-4 text-white max-w-sm ">
      <div className="flex justify-center">
        <Image src={hit.urlImagen} alt="texto" width="200" height="200" />
      </div>
      <p className="text-2xl font-bold pt-2">{hit.nombreProducto}</p>
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
    <div className="">
      <InstantSearch
        searchClient={searchClient}
        indexName="ingelmeco_productos"
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <div className="text-center bg-[#1E1E1E] ">
          <div className="p-3">
            <SearchBox
              placeholder="Busca tus productos"
              className="bg-[#1E1E1E] text-white  w-full"
            />
          </div>
        </div>
        {/* Contenedor de  Todo*/}
        <div className="flex">
          {/* Contenedor de Selectores */}
          <div className="max-w-[300px]">
            <Panel header="Marca">
              <RefinementList
                attribute="marcaProducto"
                escapeFacetValues={false}
                className="selectores"
                style={{ maxWidth: "300px" }}
              />
            </Panel>

            <Panel header="Categoria">
              <RefinementList
                attribute="categoriaProducto"
                className="selectores"
              />
            </Panel>
          </div>
          {/* Contenedor de Hits */}
          <div className="ml-[300px] pt-5">
            <Hits hitComponent={Hit} className="pruebaHits" />
          </div>
        </div>
        <div className="pagination">
          <Pagination showFirst={true} />
        </div>
      </InstantSearch>
    </div>
  );
}
