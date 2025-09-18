import { Routes } from '@angular/router';
import { Head } from './pages/head/head';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { LoginComponent } from './pages/login/login';
import { Booking } from './pages/booking/booking';
import { BookingDetailsComponent } from './pages/booking-details-component/booking-details-component';
import { CustomersComponent } from './pages/customers/customers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: Head,
    children: [
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
      {
        path: 'vehicles',
        component: Vehicles,
      },
      {
        path: 'booking',
        component: Booking,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'bookingDetails/:id',
        component: BookingDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
