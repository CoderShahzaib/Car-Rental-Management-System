import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,    
  imports: [FormsModule],    
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginObj: User = {
    userName: '',
    password: ''
  };

  private router = inject(Router); 

  login() {
    if (this.loginObj.userName === 'admin' && this.loginObj.password === 'admin') {
      this.router.navigateByUrl("/vehicles");
    } else {
      alert('Login Failed');
    }
  }

goToPassword(event: Event, nextField: HTMLInputElement) {
  event.preventDefault();
  if (event instanceof KeyboardEvent) {
    nextField.focus();
  }
}


}
