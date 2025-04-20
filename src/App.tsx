import React, { useState, useEffect } from 'react';
import { dummyProducts } from './products';
import { Product, FilterOptions, SortDirection } from './types';
import { filterProducts, sortProducts, paginateProducts } from './utils/helpers';

// Components
import ThemeToggle from './components/ThemeToggle';
import SearchBox from './components/SearchBox';
import FilterPanel from './components/FilterPanel';
import SearchResults from './components/SearchResults';
import FeatureGrid from './components/FeatureGrid';

function App() {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedBuilding, setSelectedBuilding] = useState('All Buildings');
  const [selectedFloor, setSelectedFloor] = useState('All Floors');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Constants
  const categories = [
    'All Categories',
    'Grocery',
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Beauty',
  ];

  const buildings = ['All Buildings', 'North Wing', 'South Wing', 'West Zone', 'East Wing'];
  const floors = ['All Floors', 'Ground Floor', '1st Floor', '2nd Floor', '3rd Floor'];

  // Generate suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = dummyProducts
        .filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(product => product.name)
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const performSearch = (query: string) => {
    const filters: FilterOptions = {
      category: selectedCategory,
      building: selectedBuilding,
      floor: selectedFloor,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    };
    
    const filtered = filterProducts(dummyProducts, query, filters);
    const sorted = sortProducts(filtered, sortDirection);
    
    setSearchResults(sorted);
    setShowResults(true);
    setCurrentPage(1);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    performSearch(suggestion);
  };

  // Clear search handler
  const handleClearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
    setSelectedCategory('All Categories');
    setSelectedBuilding('All Buildings');
    setSelectedFloor('All Floors');
    setPriceRange([0, 100000]);
    setCurrentPage(1);
    setSuggestions([]);
  };

  // Voice search implementation
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = event.results[0][0].transcript;
        transcript = transcript.trim().replace(/[.,!?]+$/, '');
        
        setSearchQuery(transcript);
        performSearch(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Voice recognition is not supported in your browser.');
    }
  };

  // Toggle sort direction
  const toggleSortDirection = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    // Resort the current results
    const sorted = sortProducts(searchResults, newDirection);
    setSearchResults(sorted);
    setCurrentPage(1);
  };

  // Update search results when filters change
  useEffect(() => {
    if (searchQuery || showResults) {
      performSearch(searchQuery);
    }
  }, [selectedCategory, selectedBuilding, selectedFloor, priceRange, sortDirection]);

  // Add CSS class for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Calculate paginated results
  const paginatedResults = paginateProducts(searchResults, currentPage, itemsPerPage);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className={`text-4xl font-bold text-center mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Product Genie
          </h1>
          <p className={`text-center mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Find any product in your local supermarket instantly
          </p>

          {/* Search Form */}
          <SearchBox
            isDarkMode={isDarkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            handleSearch={handleSearch}
            handleClearSearch={handleClearSearch}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            handleVoiceSearch={handleVoiceSearch}
            isListening={isListening}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />

          {/* Advanced Filters */}
          {showFilters && (
            <FilterPanel
              isDarkMode={isDarkMode}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
              selectedFloor={selectedFloor}
              setSelectedFloor={setSelectedFloor}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              buildings={buildings}
              floors={floors}
            />
          )}

          {/* Search Results */}
          {showResults && (
            <SearchResults
              searchResults={searchResults}
              isDarkMode={isDarkMode}
              sortDirection={sortDirection}
              toggleSortDirection={toggleSortDirection}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              setItemsPerPage={setItemsPerPage}
              paginatedResults={paginatedResults}
            />
          )}

          {/* Features Grid */}
          {!showResults && <FeatureGrid isDarkMode={isDarkMode} />}
        </div>
      </div>
    </div>
  );
}

export default App;