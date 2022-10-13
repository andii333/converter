import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { currencyObject } from '../interfaces/currency-object';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainComponent implements OnInit {
  listCurrency: currencyObject[] = [];
  form!:FormGroup;
leftInput!:number;
  rightInput!:number;

  constructor(
    public service: ApiService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.service.fetchExchange().subscribe(exchangeList => {
      const obj = exchangeList.rates;
      for (const key in obj) {
        this.listCurrency.push({ name: key, value: obj[key] as number })
      }
    }
    )

    this.form = this.fb.group({
      leftSelect: ['',[Validators.required]],
      leftInput: ['', [Validators.required]],
      rightSelect: ['', [Validators.required]],
      rightInput: ['', [Validators.required]],
  })
  }


  onSubmit(letter:string) {
    const leftSelect = this.form.value.leftSelect;
    const rightSelect = this.form.value.rightSelect;
    
    if (letter === 'a'){
      this.leftInput = this.form.value.leftInput;
      this.rightInput = +(rightSelect * this.leftInput / leftSelect ).toFixed(2);
    } 
    if (letter === 'b') {
      this.rightInput = +(rightSelect * this.leftInput / leftSelect).toFixed(2);
    } 
    if (letter === 'c') {
      this.rightInput = this.form.value.rightInput;
      this.leftInput = +(leftSelect * this.rightInput / rightSelect ).toFixed(2);
    }
  }
}
