import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponse, CarModel } from '../../models/car';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class Vehicle {
  private url = environment.apiUrl;

  http = inject(HttpClient);
  getCars(): Observable<APIResponse>{
    return this.http.get<APIResponse>(`${this.url}/Cars`);
  }

  onSaveCar(car: CarModel): Observable<APIResponse> {
  return this.http.post<APIResponse>(`${this.url}/Cars`, car);
}


  updateCars(id: number, car : CarModel): Observable<APIResponse> {
    return this.http.put<APIResponse>(`${this.url}/Cars/${id}`, car);
  }

  deleteCar(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}/Cars/${id}`);
  }
  
}
