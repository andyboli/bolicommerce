export enum DOMAIN_CATEGORIES {
  "ALL" = "all",
  "BUSCAPE" = "buscape",
  "FREEEMARKET" = "freemarket",
}

export enum PRODUCTS_CATEGORIES {
  "MOBILE" = "mobile",
  "REFRIGERATOR" = "refrigerator",
  "TV" = "tv",
}

export interface Product {
  category: PRODUCTS_CATEGORIES;
  description: string;
  domain: Omit<DOMAIN_CATEGORIES, DOMAIN_CATEGORIES.ALL>;
  image: string;
  price: string;
  title: string;
  url: string;
}

export type DomainsProducs = Record<
  DOMAIN_CATEGORIES.BUSCAPE | DOMAIN_CATEGORIES.FREEEMARKET,
  Product[] | []
>;

export type Categories = Partial<
  Pick<PostProductsRequestParams, "domain" | "category">
>;

export interface PostProductsRequestParams {
  domain: DOMAIN_CATEGORIES;
  category: PRODUCTS_CATEGORIES;
  searchValue: string;
  stored: boolean;
}

export interface PostProductsRequestResponse {
  products: DomainsProducs;
  stored: boolean;
}
