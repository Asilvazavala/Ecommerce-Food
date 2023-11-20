export type APIArracheraBurger = {
  id:          number;
  nombre:      string;
  descripcion: string;
  descripcionLarga: string;
  imagen:      string;
  categoria:   string;
  cantidad:    number;
  precio:      number;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  images: Image[];
};

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}