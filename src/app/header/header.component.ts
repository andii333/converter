import { Component, OnInit } from '@angular/core';
import { currencyObject } from '../interfaces/currency-object';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss']
})
export class HeaderComponent implements OnInit {
  currencies: currencyObject[] = [];
  relevantCurrens!: number;
  constructor(private serviceApi: ApiService) { }

  ngOnInit() {
    this.serviceApi.fetchExchange().subscribe(obj => {
      const currens = obj.rates;
      for (const key in currens) {
        if (key.includes("UAH")) { this.relevantCurrens = currens[key] as number
         }}
      for (const key in currens) {
        if (key.includes("EUR") || key.includes("USD")) {
          this.currencies.push({ name: key, value:(this.relevantCurrens / (currens[key] as number))})
        }
      }
    }
    )
  }
}

