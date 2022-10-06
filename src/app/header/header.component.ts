import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.scss']
})
export class HeaderComponent implements OnInit {
  currencies:any;
  constructor(private serviceApi: ApiService) { }

 ngOnInit() {
   this.serviceApi.fetchExchange()
this.asd()
  }
    async asd(){
    await this.serviceApi.exchangeList
     this.currencies = this.serviceApi.exchangeList
    }
   
}

