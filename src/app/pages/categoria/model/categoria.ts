import { Pageable, Sort } from "../../../@shared/model/request";

export interface Categoria {
    id?: number;
    name?: string;
};

export interface CategoriaListResult {
  content: Categoria [];
  pageable:Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  number: number;
  first: boolean;
  size: number;
  sort: Sort;
  empty: boolean;
};
