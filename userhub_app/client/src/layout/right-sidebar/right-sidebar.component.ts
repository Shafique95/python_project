import { Component } from '@angular/core';
import './right-sidebar.component.css';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  template: `
    <aside class="right-sidebar">
      <section class="friend-requests">
        <div class="section-title">Friend requests <a class="see-all">See all</a></div>
        <div class="request">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Friend" />
          <div>
            <div class="name">Asif Tonim <span class="badge blue">●</span></div>
            <button class="btn confirm">Confirm</button>
            <button class="btn delete">Delete</button>
          </div>
        </div>
      </section>
      <section class="birthdays">
        <div class="section-title"><span class="icon">🎂</span> Birthdays</div>
        <div class="birthday">
          <span class="icon">🎉</span> Abir Ahammed and 9 others have birthdays today.
        </div>
      </section>
      <section class="contacts">
        <div class="section-title">Contacts <span class="search"><span class="material-icons">search</span></span></div>
        <ul>
          <li *ngFor="let contact of contacts">
            <img [src]="contact.img" alt="{{contact.name}}" />
            <span>{{contact.name}}</span>
            <span class="badge green" *ngIf="contact.online">●</span>
          </li>
        </ul>
      </section>
    </aside>
  `,
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  contacts = [
    { name: 'Mojahid Khan', img: 'https://randomuser.me/api/portraits/men/21.jpg', online: true },
    { name: 'Md Mursalin', img: 'https://randomuser.me/api/portraits/men/22.jpg', online: true },
    { name: 'Ali Hossain', img: 'https://randomuser.me/api/portraits/men/23.jpg', online: false },
    { name: 'Ramjan Ali Khan', img: 'https://randomuser.me/api/portraits/men/24.jpg', online: true },
    { name: 'Block-heart Toriqul', img: 'https://randomuser.me/api/portraits/men/25.jpg', online: false },
    { name: 'Md Alamin', img: 'https://randomuser.me/api/portraits/men/26.jpg', online: true },
    { name: 'Sadekul Islam', img: 'https://randomuser.me/api/portraits/men/27.jpg', online: false },
    { name: 'Mohammed Akhtar', img: 'https://randomuser.me/api/portraits/men/28.jpg', online: true },
    { name: 'Emad Haque', img: 'https://randomuser.me/api/portraits/men/29.jpg', online: false },
    { name: 'Muhammad Mubarak', img: 'https://randomuser.me/api/portraits/men/30.jpg', online: true },
    { name: 'Konika Jahan Kona', img: 'https://randomuser.me/api/portraits/women/31.jpg', online: true }
  ];
} 