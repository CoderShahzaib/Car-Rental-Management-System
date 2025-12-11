import { Component, inject, OnInit } from '@angular/core';
import { BookingModel, BookingFormModel } from '../../../models/booking';
import { BookingService } from '../../services/booking-service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIResponse } from '../../../models/car';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css'],
})
export class Booking implements OnInit {
  bookingList: BookingModel[] = [];
  bookingService = inject(BookingService);

  bookingForm: FormGroup = new FormGroup({
    customerId: new FormControl<number | null>(null, Validators.required),
    carId: new FormControl<number | null>(null, Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    totalAmount: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  ngOnInit() {
    this.getAllBookings();
  }

  // ✅ Create a new booking
  createNewBooking() {
    if (this.bookingForm.invalid) {
      alert('Please fill required fields.');
      return;
    }

    const fv = this.bookingForm.value;

    const bookingData: BookingFormModel = {
      customerId: Number(fv.customerId),
      carId: Number(fv.carId),
      startDate: new Date(fv.startDate).toISOString(),
      endDate: new Date(fv.endDate).toISOString(),
      totalAmount: Number(fv.totalAmount),
    };

    console.log('Payload sent:', bookingData);

    this.bookingService.createBooking(bookingData).subscribe({
      next: (res) => {
        if (res && (res as any).result) {
          alert('Booking created successfully');
          this.bookingForm.reset();
          this.getAllBookings();
        } else {
          alert((res as any).message || 'Unknown server response');
        }
      },

      error: (err) => {
        console.error('API ERROR:', err.error);
        alert('Booking failed (check console).');
      },
    });
  }

  // ✅ Fetch all bookings
  getAllBookings() {
    this.bookingService.getBookings().subscribe((res: APIResponse) => {
      this.bookingList = res.data;
      console.log('Bookings:', this.bookingList);
    });
  }

  // ✅ Delete booking
  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Booking deleted successfully');
        this.getAllBookings();
      } else {
        alert(res.message);
      }
    });
  }

  // Clear form
  onClear() {
    this.bookingForm.reset();
  }
}
