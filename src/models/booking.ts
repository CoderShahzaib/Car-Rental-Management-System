export class BookingFormModel {
  CustomerName: string = '';
  CustomerCity: string = '';
  MobileNo: string = '';
  Email: string = '';
  BookingId: number = 0;
  CarId: number = 0;
  BookingDate: string = '';
  Discount: number = 0;
  TotalBillAmount: number = 0;
}

export interface BookingModel {
  bookingId: number
  bookingDate: string
  discount: number
  totalBillAmount: number
  customerName: string
  mobileNo: string
  brand: string
  model: string
  bookingUid: string
}
