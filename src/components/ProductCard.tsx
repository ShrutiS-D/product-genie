import React from 'react';
import { Building2, Layers, Store, Navigation } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  isDarkMode: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl`}
    >
      <div className="flex flex-col sm:flex-row h-full">
        <div className="w-full sm:w-48 h-48 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-4">
            <div>
              <h3 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {product.name}
              </h3>
              <p 
                className={`text-sm mt-1 px-2 py-1 rounded-full inline-block ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {product.category}
              </p>
            </div>
            <p className="text-lg sm:text-xl font-bold text-blue-500 bg-blue-500 bg-opacity-10 px-3 py-1 rounded-lg">
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* Enhanced Location Information */}
          <div className={`mt-4 p-3 sm:p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Product Location
            </h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-blue-500 bg-opacity-10">
                    <Building2 size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Building</p>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {product.location.building}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-blue-500 bg-opacity-10">
                    <Layers size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Floor</p>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {product.location.floor}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-blue-500 bg-opacity-10">
                    <Store size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Shop</p>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {product.location.shop}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 sm:p-2 rounded-full bg-blue-500 bg-opacity-10">
                    <Navigation size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Section</p>
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {product.location.section}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;