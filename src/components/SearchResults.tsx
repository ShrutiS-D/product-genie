import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Product, SortDirection } from '../types';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

interface SearchResultsProps {
  searchResults: Product[];
  isDarkMode: boolean;
  sortDirection: SortDirection;
  toggleSortDirection: () => void;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  paginatedResults: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  isDarkMode,
  sortDirection,
  toggleSortDirection,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
  paginatedResults,
}) => {
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  return (
    <div className="mt-8 space-y-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Search Results ({searchResults.length})
        </h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 sm:mt-0">
          <div className="flex items-center gap-2">
            <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Items per page:
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page when changing items per page
              }}
              className={`rounded-lg px-2 py-1 text-sm ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {[5, 10, 15, 20].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={toggleSortDirection}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Price: {sortDirection === 'asc' ? 'Low to High' : 'High to Low'}
            </span>
            <ArrowUpDown size={16} className="text-blue-500" />
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {paginatedResults.map((product) => (
          <ProductCard key={product.id} product={product} isDarkMode={isDarkMode} />
        ))}
        {paginatedResults.length === 0 && (
          <div
            className={`text-center py-12 rounded-xl ${
              isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'
            }`}
          >
            <p className="text-lg">No products found. Try a different search term or adjust your filters.</p>
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default SearchResults;