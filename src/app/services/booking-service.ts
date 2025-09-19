import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingFormModel } from '../../models/booking';
import { Observable } from 'rxjs';
import { APIResponse } from '../../models/car';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url = "/api"; 
  http = inject(HttpClient);

  getCars(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/cars`);
  }

  getBookings(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/booking`);
  }

  createBooking(booking: BookingFormModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.url}/createBooking`, booking);
  }

  deleteBooking(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}/deleteBooking?id=${id}`);
  }
}
