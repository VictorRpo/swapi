import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService {

  public API = '//swapi.dev/api';
  public PEOPLE_API= this.API + '/people';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/people/');
  }

  get(id: string) {
    return this.http.get(this.PEOPLE_API+ '/' + id);
  }

}
