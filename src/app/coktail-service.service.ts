import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoktailServiceService {

  constructor(public http: HttpClient) {}

  getCocktails = ():Observable<any> => {
    return this.http.get<any>('assets/cocktails.json');
  };
}
