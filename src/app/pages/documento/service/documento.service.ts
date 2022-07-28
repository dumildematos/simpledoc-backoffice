import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../customlogin/token-service.service';
import { DocumentListResult, Documento, DocumentoDetail } from '../model/documento';

const TOTAL_PAGES = 7;

export class NewsPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  load(page: number, pageSize: number): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<NewsPost[]>('assets/data/new.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }

  create(documento: Documento): Observable<DocumentoDetail> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.post<DocumentoDetail>(`${environment.url}/${environment.version}/template/create`, documento, httpOptions);

  }

  list(page: number, size: number): Observable<DocumentListResult>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.get<DocumentListResult>(`${environment.url}/${environment.version}/template/me/list?page=${page}&size=${size}&name=`, httpOptions);

  }

  delete(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.delete<DocumentListResult>(`${environment.url}/${environment.version}/template/${id}`, httpOptions);

  }

  update(documento: DocumentoDetail): Observable<DocumentoDetail>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.put<DocumentoDetail>(`${environment.url}/${environment.version}/template/${documento.id}`, documento ,httpOptions);

  }
}
