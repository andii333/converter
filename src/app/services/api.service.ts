import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExchangeClass } from '../classes/exchange-class';
import { ExchangeResponse} from '../interfaces/response'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currencyList = [];

  constructor(private http: HttpClient) { }

  fetchExchange(): Observable<ExchangeClass> {
    return this.http.get<ExchangeResponse>("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': 'dbe9a56fdfmsh0defe087f58c141p1aeb13jsnaf524cba7477',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
        )
      }
    ).pipe(
      map(res => new ExchangeClass(res)
      )
    )
  }
}