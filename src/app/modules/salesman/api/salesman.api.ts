import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salesman } from '../interfaces/Salesman'; // Assuming you have a Salesman interface

@Injectable({
  providedIn: 'root',
})
export class SalesmanApi {
  private apiUrl = 'your_api_base_url'; // Replace with your actual API base URL

  constructor(private httpClient: HttpClient) {}

  getAllSalesmen(): Observable<{ data: Salesman[] }> {
    return this.httpClient.get<{ data: Salesman[] }>(`${this.apiUrl}/salesmen`);
  }

  getSalesmanById(id: string): Observable<Salesman> {
    return this.httpClient.get<Salesman>(`${this.apiUrl}/salesmen/${id}`);
  }

  createSalesman(salesman: Salesman): Observable<Salesman> {
    return this.httpClient.post<Salesman>(`${this.apiUrl}/salesmen`, salesman);
  }

  updateSalesman(id: string, salesman: Salesman): Observable<Salesman> {
    return this.httpClient.put<Salesman>(
      `${this.apiUrl}/salesmen/${id}`,
      salesman
    );
  }

  deleteSalesman(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/salesmen/${id}`);
  }
}
