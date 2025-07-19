import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="signin-bg">
      <div class="signin-card neu-card">
        <form (ngSubmit)="onSubmit()" #f="ngForm">
          <input type="email" name="email" [(ngModel)]="email" placeholder="Email" class="signin-input neu-input center-input" required />
          <input type="password" name="password" [(ngModel)]="password" placeholder="Password" class="signin-input neu-input center-input" required />
          <button type="submit" class="neu-button">Sign In</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email = '';
  password = '';
  onSubmit() {}
} 