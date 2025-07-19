import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, User } from './api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="loading" class="user-loader">
      <span class="loader"></span> Loading users...
    </div>
    <div *ngIf="!loading && users.length === 0" class="empty">No users found.</div>
    <div *ngIf="!loading && users.length" class="user-list">
      <div *ngFor="let user of users" class="profile-card neu-card" (click)="showDetails(user)">
        <div class="profile-avatar">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
        </div>
        <div class="profile-info">
          <div class="profile-name">{{ user.name }}</div>
          <div class="profile-email">{{ user.email }}</div>
        </div>
        <button class="neu-btn delete-btn" (click)="deleteUser(user.id, $event)">Delete</button>
      </div>
      <div class="action-list">
        <div class="action-card neu-card">
          <span class="material-icons action-icon">person</span>
          <span class="action-text">Edit Profile</span>
        </div>
        <div class="action-card neu-card">
          <span class="material-icons action-icon">bookmark_border</span>
          <span class="action-text">Saves</span>
        </div>
        <div class="action-card neu-card">
          <span class="material-icons action-icon">download</span>
          <span class="action-text">Downloads</span>
        </div>
        <div class="action-card neu-card">
          <span class="material-icons action-icon">call</span>
          <span class="action-text">Contacts</span>
        </div>
        <div class="action-card neu-card">
          <span class="material-icons action-icon">settings</span>
          <span class="action-text">Settings</span>
        </div>
        <div class="action-card neu-card">
          <span class="material-icons action-icon">help_outline</span>
          <span class="action-text">Help</span>
        </div>
      </div>
      <div class="bottom-nav">
        <button class="neu-btn nav-btn"><span class="material-icons">home</span></button>
        <button class="neu-btn nav-btn"><span class="material-icons">search</span></button>
        <button class="neu-btn nav-btn"><span class="material-icons">add</span></button>
        <button class="neu-btn nav-btn"><span class="material-icons">chat_bubble_outline</span></button>
        <button class="neu-btn nav-btn"><span class="material-icons">more_horiz</span></button>
      </div>
    </div>
    <!-- Details Modal -->
    <div class="user-details-modal" *ngIf="selectedUser">
      <div class="modal-content neu-card">
        <button class="close-btn" (click)="closeDetails()">×</button>
        <div class="profile-avatar">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
        </div>
        <form class="profile-info" (ngSubmit)="updateUser()">
          <div class="form-group">
            <input [(ngModel)]="editName" name="editName" class="neu-input modal-input" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input [(ngModel)]="editEmail" name="editEmail" class="neu-input modal-input" placeholder="Email" required type="email" />
          </div>
        </form>
        <div class="modal-bottom-btns">
          <button class="neu-btn delete-btn" (click)="deleteUser(selectedUser.id, $event)">Delete</button>
          <button class="neu-btn update-btn" (click)="updateUser()">Update</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  @Output() confetti = new EventEmitter<void>();
  users: User[] = [];
  loading = true;
  selectedUser: User | null = null;
  deleting = false;
  editName = '';
  editEmail = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading = true;
    this.api.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
      }
    });
  }

  showDetails(user: User) {
    this.selectedUser = user;
    this.editName = user.name;
    this.editEmail = user.email;
  }

  closeDetails() {
    this.selectedUser = null;
  }

  deleteUser(id: number, event: Event) {
    event.stopPropagation();
    this.deleting = true;
    this.api.deleteUser(id).subscribe({
      next: () => {
        this.deleting = false;
        this.closeDetails();
        this.reload();
      },
      error: () => {
        this.deleting = false;
        // চাইলে error toast দেখাতে পারেন
      }
    });
  }

  updateUser() {
    if (!this.selectedUser) return;
    this.api.updateUser(this.selectedUser.id, { name: this.editName, email: this.editEmail }).subscribe({
      next: () => {
        this.closeDetails();
        this.reload();
      },
      error: () => {
        // চাইলে error toast দেখাতে পারেন
      }
    });
  }
} 