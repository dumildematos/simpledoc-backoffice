import { Pageable, Sort } from "../../../@shared/model/request";
import { UserRole } from "../../customlogin/model/User";

export interface Usuario {
    id?: number;
    username?: string;
    firstname: string;
    lastname: string;
    avatar: string;
    birthdate: string;
    country: string;
    phonenumber: string;
    authProvider: string;
    roles: UserRole [];
    teams: any [];
    invitedTeams: any [];
    templates: any [];
};

export interface UsuarioListResult {
  content: Usuario [];
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
