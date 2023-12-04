// YourComponent.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';
import { Salesman } from 'src/app/modules/salesman/interfaces/Salesman';
import { SaleApi } from '../../api/sale.api';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
})
export class SaleFormComponent implements OnInit {
  salesmen: Salesman[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private salesmanApi: SalesmanApi,
    private saleApi: SaleApi
  ) {}

  ngOnInit(): void {
    this.salesmanApi
      .getAllSalesmen()
      .subscribe({ next: ({ data }) => (this.salesmen = data) });
  }

  saleForm = this.formBuilder.group({
    product_name: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(0)]],
    salesman_id: [null, Validators.required],
  });

  handleSubmit() {
    const formData = this.saleForm.value;
    this.saleApi.create(formData).subscribe({
      next: (result) => this.saleForm.reset(),
      error: (error) => console.log(error),
    });
  }
}
