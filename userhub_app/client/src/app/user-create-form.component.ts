import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, UserCreate } from './api.service';

@Component({
  selector: 'app-user-create-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" #f="ngForm" style="margin-bottom:20px;">
      <h2>Create User</h2>
      <div>
        <input required name="name" [(ngModel)]="name" placeholder="Name" />
      </div>
      <div>
        <input required name="email" [(ngModel)]="email" type="email" placeholder="Email" />
      </div>
      <button type="submit">Create</button>
      <div *ngIf="msg" [style.color]="msg.includes('success') ? 'green' : 'red'" style="margin-top:10px;">{{msg}}</div>
    </form>
  `,
})
export class UserCreateFormComponent {
  @Output() userCreated = new EventEmitter<void>();
  name = '';
  email = '';
  msg: string | null = null;

  constructor(private api: ApiService) {}

  onSubmit() {
    this.msg = null;
    this.api.createUser({ name: this.name, email: this.email } as UserCreate).subscribe({
      next: () => {
        this.msg = 'User created successfully!';
        this.name = '';
        this.email = '';
        this.userCreated.emit();
      },
      error: err => {
        this.msg = err.error?.detail || 'Error creating user';
      }
    });
  }
} 