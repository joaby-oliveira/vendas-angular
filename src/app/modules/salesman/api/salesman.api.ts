import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salesman } from '../interfaces/Salesman'; // Assuming you have a Salesman interface
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesmanApi {
  constructor(private httpClient: HttpClient) {}

  getAllSalesmen(): Observable<{ data: Salesman[] }> {
    return this.httpClient.get<{ data: Salesman[] }>(`${environment.apiUrl}/vendedor`);
  }

  getSalesmanById(id: string): Observable<Salesman> {
    return this.httpClient.get<Salesman>(`${environment.apiUrl}/vendedor/${id}`);
  }

  createSalesman(salesman: Salesman): Observable<Salesman> {
    return this.httpClient.post<Salesman>(`${environment.apiUrl}/vendedor`, salesman);
  }

  updateSalesman(id: string, salesman: Salesman): Observable<Salesman> {
    return this.httpClient.put<Salesman>(
      `${environment.apiUrl}/vendedor/${id}`,
      salesman
    );
  }

  deleteSalesman(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/vendedor/${id}`);
  }
}
