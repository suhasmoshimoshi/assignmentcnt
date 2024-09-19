import { redirect } from 'next/navigation';
import { sdk } from "@/data/client";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";
import Link from 'next/link';

interface Props {
  searchParams: { page?: string };
}

const Home = async ({ searchParams }: Props) => {
  const currentPage = parseInt(searchParams.page || '1');

  if (!searchParams.page) {
    redirect('/?page=1');
  }

  const productsPerPage = 6;

  try {
    const data = await sdk.GetAllProducts({}, { cache: 'no-cache' });
    const products = data?.productCollection?.items || [];
    const totalPages = Math.ceil(products.length / productsPerPage);
    const validPage = currentPage > 0 ? currentPage : 1;
    const startIndex = (validPage - 1) * productsPerPage;
    const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Our Products
        </h1>

        <Link 
  href="/search" 
  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm 
             text-gray-900 bg-white dark:text-white dark:bg-gray-800 
             hover:bg-gray-100 dark:hover:bg-gray-700 
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
             dark:focus:ring-offset-gray-900"
>
  Search Products
</Link>


        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {paginatedProducts.map((product: any) => (
            <ProductCard
              key={product.sys.id}
              product={{
                id: product.sys.id,
                title: product.title,
                description: product.description,
                imageUrl: product.imageUrl,
              }}
            />
          ))}
        </div>

        <Pagination
          currentPage={validPage}
          totalPages={totalPages}
          generatePageLink={(page) => `/?page=${page}`}
        />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Error fetching data</h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please try again later.</p>
      </div>
    );
  }
};

export default Home;