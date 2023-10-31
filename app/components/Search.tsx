"use client";
import algoliasearch from "algoliasearch";

import { useState } from "react";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

const APPLICATION_ID = "8UD7UMU1WD";
const SEARCH_API_KEY = "b0241e4997219d7d8be22a932109b074";
const ALGOLIA_INDEX = "ingelmeco_productos";

const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);

function Hit({ hit }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h1 className="text-2xl font-bold">{hit.nombreProducto}</h1>
    </article>
  );
}

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="ingelmeco_productos">
      <SearchBox className="w-full h-12 bg-gray-200 rounded-md p-2 shadow-md"  placeholder="Busca tu producto" />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
