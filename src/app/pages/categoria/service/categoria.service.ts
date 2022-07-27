import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../customlogin/token-service.service';
import { Categoria , CategoriaListResult } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  create(body: Categoria): Observable<Categoria> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.post<Categoria>(`${environment.url}/${environment.version}/category/create`, body, httpOptions)
  }

  list(page: number, size: number): Observable<CategoriaListResult>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.get<CategoriaListResult>(`${environment.url}/${environment.version}/category/list?page=${page}&size=${size}`, httpOptions);
  }

  delete(id: number): Observable<Categoria> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };
    return this.http.delete<Categoria>(`${environment.url}/${environment.version}/category/${id}`, httpOptions);
  }

  update(category: Categoria): Observable<Categoria> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.put<Categoria>(`${environment.url}/${environment.version}/category/${category.id}`, category , httpOptions)
  }

}
