import { inject, Injectable, ɵsetInjectorProfilerContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../../models/car';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http = inject(HttpClient);
  url = "https://freeapi.miniprojectideas.com/api/CarRentalApp/GetBookingByBookingId";

  getBookingById(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}?bookingId=${id}`);
  }
}
