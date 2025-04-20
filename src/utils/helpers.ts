import { Product, FilterOptions, SortDirection } from '../types';

export const formatCurrency = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const filterProducts = (
  products: Product[],
  query: string,
  filters: FilterOptions
): Product[] => {
  return products.filter(product => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = filters.category === 'All Categories' || product.category === filters.category;
    const matchesBuilding = filters.building === 'All Buildings' || product.location.building === filters.building;
    const matchesFloor = filters.floor === 'All Floors' || product.location.floor === filters.floor;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;

    return matchesQuery && matchesCategory && matchesBuilding && matchesFloor && matchesPrice;
  });
};

export const sortProducts = (products: Product[], sortDirection: SortDirection): Product[] => {
  return [...products].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
};

export const paginateProducts = (
  products: Product[],
  currentPage: number,
  itemsPerPage: number
): Product[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return products.slice(startIndex, startIndex + itemsPerPage);
};