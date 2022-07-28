import { Pageable, Sort } from "../../../@shared/model/request";
import { Categoria } from "../../categoria/model/categoria";

export interface Documento {
    id?: number;
    name: string;
    content: string;
    price: string;
    description?: string;
    cover: string;
    categoryId: number;
};


export interface DocumentoDetail {
  id?: number;
  name: string;
  content?: string;
  price: string;
  description?: string;
  cover: string;
  createdAt?: string;
  category: Categoria [];
};

export interface DocumentListResult {
  content?: DocumentoDetail [];
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


export interface DocumentoAction {
  documento: DocumentoDetail,
  operation: string;
}
