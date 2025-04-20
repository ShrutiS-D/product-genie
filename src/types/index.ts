export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  location: {
    building: string;
    floor: string;
    shop: string;
    section: string;
  };
}

export interface FilterOptions {
  category: string;
  building: string;
  floor: string;
  minPrice: number;
  maxPrice: number;
}

export type SortDirection = 'asc' | 'desc';