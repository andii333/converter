import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainComponent {
  leftSelect = new FormControl("EUR");
  leftInput = new FormControl('');
  rightSelect = new FormControl('UAH');
  rightInput = new FormControl('');

  list = this.service.currencyList;

  constructor(public service: ApiService) { }

  count1(condition: string) {
    const leftCurrency = this.list.findIndex((i) => { return i.name === this.leftSelect.value });
    const rightCurrency = this.list.findIndex((i) => { return i.name === this.rightSelect.value });
    
    if (condition === 'left' && this.leftInput.value !== null) {
      const result = (+this.leftInput.value * (+this.list[rightCurrency].value) / (+this.list[leftCurrency].value))
      .toFixed(2);
      this.rightInput.setValue(result);
    } ;
    if (this.leftInput.value === null) { this.rightInput.setValue(null) };
    if (condition === 'right' && this.rightInput.value !== null) {
      const input = (+this.rightInput.value * (+this.list[leftCurrency].value) / (+this.list[rightCurrency].value))
      .toFixed(2);
      this.leftInput.setValue(input);
    };
    if (this.rightInput.value === null) { this.leftInput.setValue(null) };
  }
}
