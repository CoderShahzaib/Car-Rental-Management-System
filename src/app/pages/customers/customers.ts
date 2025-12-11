import { CustomersModel } from '../../../models/customers';
import { APIResponse } from '../../../models/car';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Customers } from '../../services/customers';
import { Component, inject } from '@angular/core';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  imports: [FormsModule],
  styleUrls: ['./customers.css'],
  standalone: true
})
export class CustomersComponent {
  customersList: CustomersModel[] = [];
  customerObj = new CustomersModel();
  customerSrv = inject(Customers) 

  updateCustomer(Id: number,customer: CustomersModel) {
    this.customerSrv.updateCustomer(Id, customer).subscribe((res: APIResponse) => {
      if (res.data) {
        alert('Customer updated successfully');
        this.onRefreshCustomers();
        this.onClear();
      } else {
        alert(res.message);
      }
    });
  }
  ngOnInit() {
    this.getAllCustomers();
  }
  editCustomer(data: CustomersModel) {
    this.customerObj = data;
  }
  createCustomer(obj: CustomersModel) {
    this.customerSrv.createNewCustomer(obj).subscribe((res: APIResponse) => {
      if (res.data) {
        alert('Customer created successfully');
        this.onRefreshCustomers();
        this.onClear();
      } else {
        alert(res.message);
      }
    });
  }
  getAllCustomers() {
    this.customerSrv.getAllCustomers().subscribe((res: APIResponse) => {
      if (res.data) {
        this.customersList = res.data as CustomersModel[];
      }
    });
  }

  deleteCustomer(id: number) {
    this.customerSrv.deleteCustomer(id).subscribe((res: APIResponse) => {
      if (res.data) {
        alert('Customer deleted successfully');
        this.onRefreshCustomers();
      } else{
        alert("Not works");
      }
    });
  }

  onRefreshCustomers() {
    this.getAllCustomers();
  }

  onClear() {
    this.customerObj = new CustomersModel();
  }
}
