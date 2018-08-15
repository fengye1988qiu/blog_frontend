import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  sendRequest(url, method?, body?): Observable<HttpEvent<any>> {
    const request = new HttpRequest(method || 'GET', environment.domain + url, body || {}, httpOptions);
    return this.http.request(request);
  }
}
