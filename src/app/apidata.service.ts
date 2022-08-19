import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
url="https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
  constructor(private http: HttpClient) { }

  users()
  {
    return this.http.get(this.url);
  }
}
