import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic, X, Filter, Loader2, ChevronDown } from 'lucide-react';

interface SearchBoxProps {
  isDarkMode: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  handleSearch: (e: React.FormEvent) => void;
  handleClearSearch: () => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  handleVoiceSearch: () => void;
  isListening: boolean;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  isDarkMode,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  handleSearch,
  handleClearSearch,
  showFilters,
  setShowFilters,
  handleVoiceSearch,
  isListening,
  suggestions,
  onSuggestionClick,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setShowSuggestions(searchQuery.length > 0);
  }, [searchQuery]);

  return (
    <form onSubmit={handleSearch} className="relative">
      <div
        className={`flex items-center gap-2 p-2 rounded-2xl shadow-lg transition-colors ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`appearance-none pl-4 pr-8 py-2 rounded-xl transition-colors ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          />
        </div>

        {/* Search Input with Clear Button */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for a product..."
            className={`w-full px-4 py-2 pr-10 rounded-xl outline-none transition-colors ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400'
                : 'bg-gray-100 text-gray-800 placeholder-gray-500'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
              }`}
            >
              <X size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          )}

          {/* Live Search Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className={`absolute z-50 w-full mt-2 rounded-xl shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <ul className="py-1">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer transition-colors ${
                      isDarkMode
                        ? 'hover:bg-gray-700 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => {
                      onSuggestionClick(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
            aria-label="Toggle filters"
          >
            <Filter
              size={20}
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${
                showFilters ? 'text-blue-500' : ''
              }`}
            />
          </button>
          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
            aria-label="Voice search"
          >
            {isListening ? (
              <Loader2 size={20} className="animate-spin text-blue-500" />
            ) : (
              <Mic size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
            )}
          </button>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-md"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;