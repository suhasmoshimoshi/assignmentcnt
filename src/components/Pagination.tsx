interface PaginationProps {
  currentPage: number;
  totalPages: number;
  generatePageLink: (page: number) => string;
}

const Pagination = ({ currentPage, totalPages, generatePageLink }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-[5rem] space-x-2">
      {/* Previous Button */}
      <a
        href={currentPage > 1 ? generatePageLink(currentPage - 1) : ''}
        className={`px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                    ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400 dark:hover:bg-gray-600'}`}
        aria-disabled={currentPage <= 1}
      >
        Previous
      </a>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <a
          key={number}
          href={generatePageLink(number)}
          className={`px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                      ${currentPage === number ? 'bg-gray-800 dark:bg-gray-200 !text-white dark:!text-black' : 'hover:bg-gray-400 dark:hover:bg-gray-600'}`}
        >
          {number}
        </a>
      ))}

      {/* Next Button */}
      <a
        href={currentPage < totalPages ? generatePageLink(currentPage + 1) : ''}
        className={`px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                    ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400 dark:hover:bg-gray-600'}`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
