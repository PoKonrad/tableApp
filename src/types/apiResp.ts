export interface ApiProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface ApiResp {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ApiProduct[] | ApiProduct;
  support: Support;
}
