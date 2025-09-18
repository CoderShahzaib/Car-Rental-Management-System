import { Component, inject, OnInit } from '@angular/core';
import { BookingDetails } from '../../../models/booking_details';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Booking } from '../booking/booking';
import { SearchService } from '../../services/search-service';
import { APIResponse } from '../../../models/car';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-booking-details-component',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './booking-details-component.html',
  styleUrl: './booking-details-component.css'
})
export class BookingDetailsComponent implements OnInit {
  booking?: BookingDetails; 
  route = inject(ActivatedRoute);
  bookingSrv = inject(SearchService);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookingSrv.getBookingById(id).subscribe((res: APIResponse) => {
      if (res.result && res.data) {
        this.booking = res.data as BookingDetails;
      }
    });
  }
}
