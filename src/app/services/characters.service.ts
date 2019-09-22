import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../utils';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getList(limit: number, offset: number, filter: boolean): Observable<any> {
    return this.http.get(url(
      '/characters',
      `&limit=${limit}
      &offset=${offset}
      &orderBy=${filter ? 'name' : '-name'}`
    ));
  }

  getOne(id: string): Observable<object> {
    return this.http.get(url(
      `/characters/${id}`
    ));
  }

}
