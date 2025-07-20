import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import './header.component.css';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fb-header">
      <div class="fb-header-left">
        <img class="fb-logo" src="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" alt="Facebook" />
        <div class="fb-search-box">
          <span class="material-icons">search</span>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div class="fb-header-center">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><span class="material-icons">home</span></a>
        <a><span class="material-icons">ondemand_video</span></a>
        <a><span class="material-icons">storefront</span></a>
        <a><span class="material-icons">groups</span></a>
        <a><span class="material-icons">sports_esports</span></a>
      </div>
      <div class="fb-header-right">
        <a><span class="material-icons">apps</span></a>
        <a><span class="material-icons">messenger</span></a>
        <a class="notif"><span class="material-icons">notifications</span><span class="badge">7</span></a>
        <a class="avatar"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" /></a>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = false;
  @Output() toggleDark = new EventEmitter<void>();
  ngOnInit() {
    // Material icons ফন্ট লোড (একবারই)
    if (!document.getElementById('material-icons-font')) {
      const link = document.createElement('link');
      link.id = 'material-icons-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(link);
    }
  }
}
