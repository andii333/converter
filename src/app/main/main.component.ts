import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainComponent {
  result!: string | number;
  input!: string | number;
  list = this.service.currencyList
  constructor(public service: ApiService) { }

  count1(leftSelect: string, leftInput: string, rightSelect: string) {
      this.input = leftInput;
      const leftCurrency = this.list.findIndex((i) => {return i.name === leftSelect});
      const rightCurrency = this.list.findIndex((i) => {return i.name === rightSelect});
      this.result = +leftInput * (this.list[rightCurrency].value) / (this.list[leftCurrency].value);
      this.result = +this.result.toFixed(2);
    }
    count2(leftSelect: string, rightSelect: string, rightInput:string) {
      this.result = rightInput;
      const leftCurrency = this.list.findIndex((i) => { return i.name === rightSelect});
      const rightCurrency = this.list.findIndex((i) => { return i.name === leftSelect });
      this.input = +rightInput * (this.list[rightCurrency].value) / (this.list[leftCurrency].value);
      this.input = +this.input.toFixed(2);
    }
}
