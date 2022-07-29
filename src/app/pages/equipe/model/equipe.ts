import { Pageable, Sort } from "../../../@shared/model/request";

export interface Equipe {
    id?: number;
    name?: string;
    description: string;
    createdAt: string;
    banner: string;
    type: string;
    documents: any [];
    contributors: any [];
};

export interface EquipeListResult {
  content: Equipe [];
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
