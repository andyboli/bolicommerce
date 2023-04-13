export enum PRODUCTS_CATEGORIES {
  "MOBILE" = "MOBILE",
  "REFRIGERATOR" = "REFRIGERATOR",
  "TV" = "TV",
}

export enum WEB_CATEGORIES {
  "BUSCAPE" = "BUSCAPE",
  "FREEE_MARKET" = "FREEE_MARKET",
  "ALL" = "ALL",
}

export interface Categories {
  webCategory?: WEB_CATEGORIES;
  productCategory?: PRODUCTS_CATEGORIES;
}
