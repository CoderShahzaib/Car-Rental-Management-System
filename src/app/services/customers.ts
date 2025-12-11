import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../../models/car';
import { CustomersModel } from '../../models/customers';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class Customers {
  
   http = inject(HttpClient)
   private url = environment.apiUrl; 

  getAllCustomers(): Observable<APIResponse>{
    return this.http.get<APIResponse>(`${this.url}/Customers`);
  }

  createNewCustomer(obj: CustomersModel): Observable<APIResponse>{
    return this.http.post<APIResponse>(`${this.url}/Customers`, obj);
  }

  updateCustomer(Id: number,obj: CustomersModel): Observable<APIResponse> {
  return this.http.put<APIResponse>(`${this.url}/Customers/${Id}`, obj);
}

deleteCustomer(id: number): Observable<APIResponse> {
  return this.http.delete<APIResponse>(`${this.url}/Customers/${id}`);
}

}
