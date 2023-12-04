import { Component, OnInit } from '@angular/core';

import { SalesmanApi } from 'src/app/modules/salesman/api/salesman.api';
import { Router } from '@angular/router';
import { SaleApi } from 'src/app/modules/sale/api/sale.api';
import { Salesman } from '../../interfaces/Salesman';

@Component({
  templateUrl: 'salesman-root.component.html',
})
export class SalesmanRootComponent implements OnInit {
  constructor(private salesmanApi: SalesmanApi, private router: Router) {}

  salesmen!: Salesman[];
  error!: { message: string };

  ngOnInit(): void {
    this.salesmanApi.getAllSalesmen().subscribe({
      next: ({ data }) => {
        this.salesmen = data;
      },
      error: () => {
        this.error.message =
          'Erro inesperado ao listar vendas, tente novamente mais tarde';
      },
    });
  }
  editSalesman(salesman: Salesman) {
    this.router.navigate(['vendedores/editar'], {
      queryParams: { id: salesman.id },
    });
  }

  deleteSalesman(sale: Salesman) {
    this.salesmanApi.deleteSalesman(sale.id).subscribe({
      next: () => {
        this.salesmen = this.salesmen.filter((item) => item.id !== sale.id);
      },
      error: () => {
        console.log('nao excluiu');
      },
    });
  }
}
