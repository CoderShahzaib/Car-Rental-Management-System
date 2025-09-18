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
   onSaveCar(car: CarModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.url+"/CreateNewCar", car);
  }
  getCars(): Observable<APIResponse>{
    return this.http.get<APIResponse>(this.url+"/cars");
  }
  updateCars(car: CarModel): Observable<APIResponse> {
    return this.http.put<APIResponse>(this.url+"/UpdateCar", car);
  }

  deleteCar(id: number){
    return this.http.delete<APIResponse>(this.url+"/DeleteCarbyCarId?carid="+id);
  }
}
