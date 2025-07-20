import { Component } from '@angular/core';
import './right-sidebar.component.css';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  template: `
    <aside class="right-sidebar">
      <section class="friend-requests">
        <h4>Friend requests</h4>
        <div class="request">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Friend" />
          <div>
            <div class="name">Asif Tonim</div>
            <button class="btn confirm">Confirm</button>
            <button class="btn delete">Delete</button>
          </div>
        </div>
      </section>
      <section class="birthdays">
        <h4>Birthdays</h4>
        <div class="birthday">
          <span class="icon">🎂</span> Abir Ahammed and 9 others have birthdays today.
        </div>
      </section>
      <section class="contacts">
        <h4>Contacts</h4>
        <ul>
          <li *ngFor="let contact of contacts">
            <img [src]="contact.img" alt="{{contact.name}}" />
            <span>{{contact.name}}</span>
          </li>
        </ul>
      </section>
    </aside>
  `,
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  contacts = [
    { name: 'Shahana Akther', img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Md Mursalin', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Rayhan Uddin', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Khadiza Akther', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: 'Ali Hossain', img: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Ramjan Ali Khan', img: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Muhammad Mubarak', img: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { name: 'Waliullah Mia', img: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Konika Jahan Kona', img: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { name: 'Rakibul Hasan', img: 'https://randomuser.me/api/portraits/men/11.jpg' }
  ];
} 