import { Component } from '@angular/core';
import { AuthService } from '../../service/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html'

})
export class AuthComponent {
  register = { username: '', email: '', password: '' };
  login = { username: '', password: '' };
  message = '';

  constructor(private auth: AuthService) {}

  onRegister() {
    this.auth.register(this.register).subscribe({
      next: res => this.message = res.message || 'Registered',
      error: err => this.message = err.error?.message || 'Error'
    });
  }

  onLogin() {
    this.auth.login(this.login).subscribe({
      next: res => this.message = res.message || 'Logged in',
      error: err => this.message = err.error?.message || 'Login failed'
    });
  }
}
