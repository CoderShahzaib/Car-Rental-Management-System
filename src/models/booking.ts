export class BookingFormModel {
  carId: number = 0;  
  customerId: number = 0;
  startDate: string = "";
  endDate: string = "";
  totalAmount: number = 0;
}


export interface BookingModel {
  id: number;
  carModel: string;
  customerName: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
}

