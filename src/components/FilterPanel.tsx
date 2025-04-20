import React from 'react';

interface FilterPanelProps {
  isDarkMode: boolean;
  selectedBuilding: string;
  setSelectedBuilding: (building: string) => void;
  selectedFloor: string;
  setSelectedFloor: (floor: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  buildings: string[];
  floors: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isDarkMode,
  selectedBuilding,
  setSelectedBuilding,
  selectedFloor,
  setSelectedFloor,
  priceRange,
  setPriceRange,
  buildings,
  floors,
}) => {
  return (
    <div className={`mt-4 p-4 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Building Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Building
          </label>
          <select
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
            className={`w-full rounded-lg px-3 py-2 transition-colors ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {buildings.map((building) => (
              <option key={building} value={building}>
                {building}
              </option>
            ))}
          </select>
        </div>

        {/* Floor Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Floor
          </label>
          <select
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(e.target.value)}
            className={`w-full rounded-lg px-3 py-2 transition-colors ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {floors.map((floor) => (
              <option key={floor} value={floor}>
                {floor}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Price Range (₹)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              min="0"
              max={priceRange[1]}
              className={`w-full rounded-lg px-3 py-2 transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              min={priceRange[0]}
              className={`w-full rounded-lg px-3 py-2 transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;