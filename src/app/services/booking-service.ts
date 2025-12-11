import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingFormModel } from '../../models/booking';
import { Observable } from 'rxjs';
import { APIResponse } from '../../models/car';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = environment.apiUrl; 
  http = inject(HttpClient);

  getCars(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/Cars`);
  }

  getBookings(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/Bookings`);
  }

  createBooking(booking: BookingFormModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.url}/Bookings`, booking);
  }

  deleteBooking(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}/Bookings/${id}`);
  }
}
