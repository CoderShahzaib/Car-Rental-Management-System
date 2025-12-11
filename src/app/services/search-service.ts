import { inject, Injectable, ɵsetInjectorProfilerContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../../models/car';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  http = inject(HttpClient);
  private url = environment.apiUrl;

  getBookingById(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/Bookings/${id}`);
  }
}
