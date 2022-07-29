import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../customlogin/token-service.service';
import { UsuarioListResult } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

list(page: number, size: number): Observable<UsuarioListResult>{

  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
    }),
  };

  return this.http.get<UsuarioListResult>(`${environment.url}/${environment.version}/user/list?page=${page}&size=${size}`, httpOptions);
}

}
