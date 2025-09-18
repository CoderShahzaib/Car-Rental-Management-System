import { Component, inject, OnInit } from '@angular/core';
import { BookingModel, BookingFormModel } from '../../../models/booking';
import { BookingService } from '../../services/booking-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIResponse, CarModel } from '../../../models/car';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css'],
})
export class Booking implements OnInit {
  bookingList: BookingModel[] = [];
  carList: CarModel[] = [];
  bookingService = inject(BookingService);

  bookingForm: FormGroup = new FormGroup({
    CustomerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CustomerCity: new FormControl('', Validators.required),
    MobileNo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
      Validators.minLength(10),
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    BookingId: new FormControl(0),
    CarId: new FormControl('', Validators.required),
    BookingDate: new FormControl('', Validators.required),
    Discount: new FormControl(0),
    TotalBillAmount: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  ngOnInit() {
    this.getAllBookings();
    this.getAllCars();
  }

  createNewBooking() {
    if (this.bookingForm.invalid) {
      alert('Please fill required fields.');
      return;
    }

    const fv = this.bookingForm.value;

    const bookingData = {
      CustomerName: fv.CustomerName || '',
      CustomerCity: fv.CustomerCity || '',
      MobileNo: fv.MobileNo || '',
      Email: fv.Email || '',
      BookingId: fv.BookingId || 0,
      CarId: fv.CarId ? Number(fv.CarId) : 0,
      BookingDate: fv.BookingDate
        ? new Date(fv.BookingDate).toISOString().split('T')[0] // 🚨 just date part
        : new Date().toISOString().split('T')[0],
      Discount: fv.Discount || 0,
      TotalBillAmount: fv.TotalBillAmount || 0,
    };

    console.log('Payload sent to API:', bookingData);

    this.bookingService.createBooking(bookingData).subscribe({
      next: (res) => {
        console.log('API response:', res);
        if (res && (res as any).result) {
          alert('Booking created successfully');
          this.bookingForm.reset();
          this.getAllBookings();
          this.bookingForm.reset({
            CarId: '',
          });
        } else {
          alert((res as any).message || 'Server returned no result field.');
        }
      },

      error: (err) => {
        console.error('API error status:', err.status);
        console.error('API error body:', err.error);
        alert('Booking failed — see console (err.error) for details.');
      },
    });
  }
  getAllCars() {
    this.bookingService.getCars().subscribe((res: APIResponse) => {
      this.carList = res.data;
    });
  }
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
  onRefresh() {
    this.getAllBookings();
  }
  getAllBookings() {
    this.bookingService.getBookings().subscribe((res: APIResponse) => {
      this.bookingList = res.data;
    });
  }

  onClear() {
    this.bookingForm.reset();
    this.bookingForm.reset({
      CarId: '',
    });
  }
}
