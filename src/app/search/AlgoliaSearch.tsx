"use client"
import React, { useState, useRef, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ''
);

type HitProps = {
  hit: {
    fields: {
      title: { 'en-US': string };
      description: { 'en-US': string };
      imageUrl: { 'en-US': string };
    };
    sys: {
      id: string;
    };
  };
};

function Hit({ hit }: HitProps) {
  const { title, description, imageUrl } = hit.fields;
  const { id } = hit.sys;

  return (
    <div className="hit p-4 border-b last:border-b-0 hover:bg-gray-50">
      <div className="flex items-center">
        <img src={imageUrl['en-US']} alt={title['en-US']} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{title['en-US']}</h3>
          <p className="text-sm text-gray-600 truncate">{description['en-US']}</p>
        </div>
        <Link href={`/products/${id}`} className="ml-4">
          <Button variant="outline" size="sm">View</Button>
        </Link>
      </div>
    </div>
  );
}

const ResultsWrapper = connectStateResults(({ searchState, searchResults, children }: any) => {
  return searchState.query && searchResults && searchResults.nbHits !== 0 ? (
    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden">
      {children}
    </div>
  ) : null;
});

export default function AlgoliaSearch() {
  const [showResults, setShowResults] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={wrapperRef}>
      <InstantSearch searchClient={searchClient} indexName="products">
        <div className={`search-container ${isTyping ? 'is-typing' : ''}`}>
          <SearchBox
            className="ais-SearchBox"
            translations={{
              placeholder: 'Search for products...',
            }}
            onFocus={() => setShowResults(true)}
            onChange={(event) => setIsTyping(event.currentTarget.value.length > 0)}
          />
        </div>
        {showResults && (
          <ResultsWrapper>
            <Hits hitComponent={Hit} />
          </ResultsWrapper>
        )}
      </InstantSearch>
    </div>
  );
}