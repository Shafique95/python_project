import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, UserCreate } from './api.service';

@Component({
  selector: 'app-user-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" #f="ngForm" class="user-form neu-card">
      <label for="name">Full Name</label>
      <div class="form-group">
        <input required id="name" name="name" [(ngModel)]="name" placeholder="Full Name" [ngClass]="{'invalid': nameTouched && !name}" (blur)="nameTouched=true" class="neu-input" />
        <div class="error" *ngIf="nameTouched && !name">Name is required</div>
      </div>
      <label for="email">Email Address</label>
      <div class="form-group">
        <input required id="email" name="email" [(ngModel)]="email" type="email" placeholder="Email Address" [ngClass]="{'invalid': emailTouched && !isValidEmail(email)}" (blur)="emailTouched=true" class="neu-input" />
        <div class="error" *ngIf="emailTouched && !isValidEmail(email)">Valid email required</div>
      </div>
      <button type="submit" [disabled]="!name || !isValidEmail(email) || loading" class="neu-btn">
        <span *ngIf="!loading">Create</span>
        <span *ngIf="loading" class="loader"></span>
      </button>
      <div *ngIf="msg" class="toast" [ngClass]="{'success': msgType==='success', 'error': msgType==='error'}">{{msg}}</div>
    </form>
  `,
  styleUrl: './user-create-form.component.css'
})
export class UserCreateFormComponent {
  @Output() userCreated = new EventEmitter<void>();
  name = '';
  email = '';
  msg: string | null = null;
  msgType: 'success' | 'error' = 'success';
  loading = false;
  nameTouched = false;
  emailTouched = false;

  constructor(private api: ApiService) {}

  isValidEmail(email: string): boolean {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  onSubmit() {
    if (!this.name || !this.isValidEmail(this.email)) return;
    this.msg = null;
    this.loading = true;
    this.api.createUser({ name: this.name, email: this.email } as UserCreate).subscribe({
      next: () => {
        this.msg = 'User created successfully!';
        this.msgType = 'success';
        this.name = '';
        this.email = '';
        this.nameTouched = false;
        this.emailTouched = false;
        this.loading = false;
        this.userCreated.emit();
        setTimeout(() => this.msg = null, 2000);
      },
      error: err => {
        this.msg = err.error?.detail || 'Error creating user';
        this.msgType = 'error';
        this.loading = false;
        setTimeout(() => this.msg = null, 3000);
      }
    });
  }
} 