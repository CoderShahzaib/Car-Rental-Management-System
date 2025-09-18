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
  url = environment.apiUrl;
  http = inject(HttpClient);

  createBooking(booking: BookingFormModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.url}/CreateNewBooking`, booking);
  }

  getCars(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/GetCars`);
  }
  getBookings(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/geAllBookings`);
  }

  deleteBooking(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.url}/DeletBookingById?id=${id}`);
  }
}
