export interface Product {
  id: string;
  name: string;
  reference: string;
  category: string;
  composition: string;
  width: string;
  recommendedUse: string;
  images: {
    thumbnail: string;
    gallery: string[];
  };
}

export enum Page {
  Home = 'home',
  Catalog = 'catalog',
  Processes = 'processes',
  About = 'about',
  Contact = 'contact',
}
