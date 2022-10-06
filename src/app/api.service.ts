import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ExchangeClass } from './exchange-class';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  exchangeList: ExchangeClass[] = []
  currencyList: ExchangeClass[] = []

  constructor(private http: HttpClient) { }

  fetchExchange() {
    return this.http.get("https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
      {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': 'dbe9a56fdfmsh0defe087f58c141p1aeb13jsnaf524cba7477',
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
        )
      }
    ).subscribe(
      {
        next: (response: any) => {
          this.currencyList.push(
            new ExchangeClass('EUR', response.rates.EUR),
            new ExchangeClass('USD', response.rates.USD),
            new ExchangeClass('UAH', response.rates.UAH)
          );
          const eur = new ExchangeClass('EUR', (response.rates.EUR) * (response.rates.UAH));
          const usd = new ExchangeClass('USD', (response.rates.EUR) / (response.rates.USD) * (response.rates.UAH));
          this.exchangeList.push(eur, usd)
        }
      }
    )
  }
}