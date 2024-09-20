import AlgoliaSearch from './AlgoliaSearch'

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8">
        Product Search
      </h1>
      <AlgoliaSearch />
    </div>
  )
}