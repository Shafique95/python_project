import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import './right-sidebar.component.css';
import { RightSidebarSearchDialogComponent } from './right-sidebar-search-dialog.component';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RightSidebarSearchDialogComponent],
  template: `
    <aside class="right-sidebar">
      <div class="section">
        <div class="section-header">
          Friend requests
          <a href="#" style="color:#1877f2;font-size:13px;text-decoration:none;">See all</a>
        </div>
        <div class="friend-request-card">
          <img class="avatar" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Asif Tonim" />
          <div class="friend-request-info">
            <div class="friend-request-name">Asif Tonim <span style="color:#65676b;font-size:12px;font-weight:400;">6d</span></div>
            <div class="friend-request-meta">Followed by 63</div>
            <div class="friend-request-actions">
              <button class="confirm">Confirm</button>
              <button class="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="section">
        <div class="section-header">Birthdays</div>
        <div class="birthday-row">
          <span style="font-size:20px;">🎁</span>
          <span><b>Abir Ahammed</b> and 9 others have birthdays today.</span>
        </div>
      </div>
      <hr />
      <div class="section">
        <div class="section-header">
          Contacts
          <span>
            <span style="font-size:18px; margin-right:8px; cursor:pointer;" (click)="openSearchDialog()">🔍</span>
            <span style="font-size:18px;">⋯</span>
          </span>
        </div>
        <ng-container *ngIf="filteredContacts.length > 0; else noContacts">
          <ul class="contacts-list">
            <li *ngFor="let contact of filteredContacts">
              <img class="avatar" [src]="contact.img" [alt]="contact.name" />
              <span class="name">{{contact.name}}</span>
              <span *ngIf="contact.online" class="online-dot"></span>
            </li>
          </ul>
        </ng-container>
        <ng-template #noContacts>
          <div class="no-contacts-msg">কোনো কন্টাক্ট নেই</div>
        </ng-template>
      </div>
    </aside>
    <app-right-sidebar-search-dialog
      *ngIf="showSearchDialog"
      [contacts]="contacts"
      (closed)="closeSearchDialog()">
    </app-right-sidebar-search-dialog>
  `,
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  contacts = [
    { name: 'MD Afzal Md Afzal', img: 'https://randomuser.me/api/portraits/men/1.jpg', online: true },
    { name: 'Afzal Hossen', img: 'https://randomuser.me/api/portraits/men/2.jpg', online: true },
    { name: 'Emad Haque', img: 'https://randomuser.me/api/portraits/men/3.jpg', online: true },
    { name: 'Md Alamin', img: 'https://randomuser.me/api/portraits/men/4.jpg', online: false },
    { name: 'Mehedi Khan', img: 'https://randomuser.me/api/portraits/men/5.jpg', online: false },
    { name: 'Rafiul Islam', img: 'https://randomuser.me/api/portraits/men/6.jpg', online: true },
    { name: 'Sakib Hasan', img: 'https://randomuser.me/api/portraits/men/7.jpg', online: false },
    { name: 'Shakil Ahmed', img: 'https://randomuser.me/api/portraits/men/8.jpg', online: true },
    { name: 'Tanvir Rahman', img: 'https://randomuser.me/api/portraits/men/9.jpg', online: false },
    { name: 'Jahidul Islam', img: 'https://randomuser.me/api/portraits/men/10.jpg', online: true },
    { name: 'Fahim Reza', img: 'https://randomuser.me/api/portraits/men/11.jpg', online: false },
    { name: 'Sabbir Hossain', img: 'https://randomuser.me/api/portraits/men/12.jpg', online: true },
    { name: 'Naimur Rahman', img: 'https://randomuser.me/api/portraits/men/13.jpg', online: false },
    { name: 'Rashedul Islam', img: 'https://randomuser.me/api/portraits/men/14.jpg', online: true },
    { name: 'Shuvo Saha', img: 'https://randomuser.me/api/portraits/men/15.jpg', online: false },
    { name: 'Tariqul Islam', img: 'https://randomuser.me/api/portraits/men/16.jpg', online: true },
    { name: 'Mamun Mia', img: 'https://randomuser.me/api/portraits/men/17.jpg', online: false },
    { name: 'Rony Akter', img: 'https://randomuser.me/api/portraits/men/18.jpg', online: true },
    { name: 'Sohanur Rahman', img: 'https://randomuser.me/api/portraits/men/19.jpg', online: false },
    { name: 'Jubayer Hossain', img: 'https://randomuser.me/api/portraits/men/20.jpg', online: true },
    { name: 'Arif Hossain', img: 'https://randomuser.me/api/portraits/men/21.jpg', online: false },
    { name: 'Biplob Mia', img: 'https://randomuser.me/api/portraits/men/22.jpg', online: true },
    { name: 'Shamim Reza', img: 'https://randomuser.me/api/portraits/men/23.jpg', online: false },
    { name: 'Rasel Ahmed', img: 'https://randomuser.me/api/portraits/men/24.jpg', online: true },
    { name: 'Jamal Uddin', img: 'https://randomuser.me/api/portraits/men/25.jpg', online: false }
  ];
  searchText = '';
  showSearchDialog = false;

  openSearchDialog() {
    this.showSearchDialog = true;
  }
  closeSearchDialog() {
    this.showSearchDialog = false;
  }
  get filteredContacts() {
    const text = this.searchText.trim().toLowerCase();
    if (!text) return this.contacts;
    return this.contacts.filter(c => c.name.toLowerCase().includes(text));
  }
} 