import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponse, CarModel } from '../../models/car';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Vehicle {
  url = environment.apiUrl;

  http = inject(HttpClient);
  getCars(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/cars`);
  }

  onSaveCar(car: CarModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.url}/createCar`, car);
  }

  updateCars(car: CarModel): Observable<APIResponse> {
    return this.http.put<APIResponse>(`${this.url}/updateCar`, car);
  }

  deleteCar(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}/deleteCar?carid=${id}`);
  }
  
}
