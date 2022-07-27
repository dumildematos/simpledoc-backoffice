

export interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};
  
export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};
