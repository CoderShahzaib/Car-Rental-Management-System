import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../../models/car';
import { CustomersModel } from '../../models/customers';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Customers {
  
   http = inject(HttpClient)
  url = "/api"; 

  getAllCustomers(): Observable<APIResponse>{
    return this.http.get<APIResponse>(`${this.url}/customers`);
  }

  createNewCustomer(obj: CustomersModel): Observable<APIResponse>{
    return this.http.post<APIResponse>(`${this.url}/CreateNewCustomer`, obj);
  }

  updateCustomer(obj: CustomersModel): Observable<APIResponse>{
    return this.http.put<APIResponse>(`${this.url}/UpdateCustomer`, obj);
  }

  deleteCustomer(id: number): Observable<APIResponse>{
    return this.http.delete<APIResponse>(`${this.url}/DeletCustomer?id=${id}`);
  }
}
