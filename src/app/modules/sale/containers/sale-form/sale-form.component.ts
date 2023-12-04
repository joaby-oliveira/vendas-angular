import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: 'sale-form.component.html',
})
export class SaleFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  saleForm = this.formBuilder.group({
    productName: ['', Validators.required],
    category: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
  });

  handleSubmit() {

  }
}
