import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  setToken(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  setObjectItem(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

  getTokenParseJson(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeToken() {
    return localStorage.clear();
  }

  isToken(key: string): boolean {
    let status: boolean = false;
    const user = localStorage.getItem(key);

    if (user != null && user != undefined)
      status = true;

    return status;
  }
}