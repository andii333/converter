import { Component, OnInit } from '@angular/core';
import { ExchangeClass } from '../classes/exchange-class';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss']
})
export class HeaderComponent implements OnInit {
  currencies!: ExchangeClass[];
  constructor(private serviceApi: ApiService) { }

  ngOnInit() {
    this.serviceApi.fetchExchange();
    this.asd();
  }

  asd() {
    this.serviceApi.exchangeList;
    this.currencies = this.serviceApi.exchangeList;
  }

}

