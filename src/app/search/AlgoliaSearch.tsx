'use client';

import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { Button } from "@/components/ui/button";


const searchClient = algoliasearch( process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '');



  console.log(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID )

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
  const {id} = hit.sys


  console.log(hit)

  return (
    <div className="hit p-2">
      <img src={imageUrl['en-US']} alt={title['en-US']} className='rounded-sm' />
      <div>
        <h2 className="hit-title">{title['en-US']}</h2>
        <p className="hit-description">{description['en-US']}</p>


        <Link href={`/products/${id}`}>
             <Button variant="outline" className="w-full">View Details</Button>
             </Link>
        
      </div>
    </div>
  );
}

export default function AlgoliaSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <SearchBox 
        className="ais-SearchBox"
        translations={{
          placeholder: 'Search for products...',
        }}
      />
      <div className="hits-container "> 
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
}
