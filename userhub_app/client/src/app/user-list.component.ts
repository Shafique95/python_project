import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, User } from './api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading">Loading users...</div>
    <div *ngIf="!loading && users.length === 0">No users found.</div>
    <ul *ngIf="!loading && users.length">
      <li *ngFor="let u of users">
        <b>{{u.name}}</b> — {{u.email}}
      </li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading = true;
    this.api.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
} 