export class CustomersModel {
  customerId: number
  customerName: string
  customerCity: string
  mobileNo: string
  email: string

  constructor() {
    this.customerId = 0
    this.customerName = ''
    this.customerCity = ''
    this.mobileNo = ''
    this.email = ''
  }
}