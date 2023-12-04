// YourComponent.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';
import { Salesman } from 'src/app/modules/salesman/interfaces/Salesman';
import { SaleApi } from '../../api/sale.api';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
})
export class SaleFormComponent implements OnInit {
  salesmen: Salesman[] = [];
  formMode!: 'update' | 'create';
  id?: string;
  changesToSave = false;

  constructor(
    private formBuilder: FormBuilder,
    private salesmanApi: SalesmanApi,
    private saleApi: SaleApi,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.salesmanApi
      .getAllSalesmen()
      .subscribe({ next: ({ data }) => (this.salesmen = data) });

    if (this.activatedRoute.snapshot.routeConfig?.path === 'criar') {
      this.formMode = 'create';
    } else {
      this.formMode = 'update';
      this.id = this.activatedRoute.snapshot.queryParams['id'];
      this.saleApi.get(this.id ?? '').subscribe({
        next: ({ data }: any) => {
          this.saleForm.patchValue(data);
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.saleForm.valueChanges.pipe(skip(1)).subscribe((v) => {
        this.changesToSave = true;
        console.log(v);
      });
    }
  }

  saleForm = this.formBuilder.group({
    product_name: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(0)]],
    salesman_id: [null, Validators.required],
  });

  handleSubmit() {
    const formData = this.saleForm.value;
    if (this.formMode === 'create') {
      this.saleApi.create(formData).subscribe({
        next: (result) => this.saleForm.reset(),
        error: (error) => console.log(error),
      });
    } else {
      if (this.id) {
        this.saleApi.update(this.id, formData).subscribe({
          next: () => (this.changesToSave = false),
          error: (error) => console.log(error),
        });
      }
    }
  }
}
