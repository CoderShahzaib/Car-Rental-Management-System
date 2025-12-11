export class CustomersModel {
  id: number
  customerName: string
  customerCity: string
  mobileNumber: string
  customerEmail: string

  constructor() {
    this.id = 0
    this.customerName = ''
    this.customerCity = ''
    this.mobileNumber = ''
    this.customerEmail = ''
  }
}