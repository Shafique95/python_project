import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right-sidebar-search-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-dialog-backdrop" (click)="close()"></div>
    <div class="search-dialog">
      <div class="search-dialog-header">
        <span>New message</span>
        <button class="close-btn" (click)="close()">✕</button>
      </div>
      <input type="text" [(ngModel)]="searchText" placeholder="To:" class="search-dialog-input" autofocus />
      <ul class="search-dialog-list">
        <li *ngFor="let contact of filteredContacts()">
          <img class="avatar" [src]="contact.img" [alt]="contact.name" />
          <span class="name">{{contact.name}}</span>
        </li>
        <li *ngIf="filteredContacts().length === 0" class="no-contacts-msg">কোনো কন্টাক্ট নেই</li>
      </ul>
    </div>
  `,
  styleUrls: ['./right-sidebar-search-dialog.component.css']
})
export class RightSidebarSearchDialogComponent {
  @Input() contacts: any[] = [];
  @Output() closed = new EventEmitter<void>();
  searchText = '';

  filteredContacts() {
    const text = this.searchText.trim().toLowerCase();
    if (!text) return this.contacts;
    return this.contacts.filter(c => c.name.toLowerCase().includes(text));
  }

  close() {
    this.closed.emit();
  }
} 