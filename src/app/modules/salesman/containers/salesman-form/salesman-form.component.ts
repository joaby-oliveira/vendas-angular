// YourComponent.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';

import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';
@Component({
  selector: 'app-salesman-form',
  templateUrl: './salesman-form.component.html',
})
export class SalesmanFormComponent implements OnInit {
  formMode!: 'update' | 'create';
  id?: string;
  changesToSave = false;

  constructor(
    private formBuilder: FormBuilder,
    private salesmanApi: SalesmanApi,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.salesmanApi;

    if (this.activatedRoute.snapshot.routeConfig?.path === 'criar') {
      this.formMode = 'create';
    } else {
      this.formMode = 'update';
      this.id = this.activatedRoute.snapshot.queryParams['id'];
      this.salesmanApi.getSalesmanById(this.id ?? '').subscribe({
        next: ({ data }: any) => {
          console.log(data)
          this.salesmanForm.patchValue(data);
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.salesmanForm.valueChanges.pipe(skip(1)).subscribe((v) => {
        this.changesToSave = true;
      });
    }
  }

  salesmanForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required, Validators.min(6)],
    commission: null,
  });

  handleSubmit() {
    const formData = this.salesmanForm.value;
    if (this.formMode === 'create') {
      this.salesmanApi.createSalesman(formData).subscribe({
        next: (result) => this.salesmanForm.reset(),
        error: (error) => console.log(error),
      });
    } else {
      if (this.id) {
        this.salesmanApi.updateSalesman(this.id, formData).subscribe({
          next: () => (this.changesToSave = false),
          error: (error) => console.log(error),
        });
      }
    }
  }
}
