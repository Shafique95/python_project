import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import './sidebar.component.css';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><span class="material-icons">home</span> Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active"><span class="material-icons">info</span> About</a></li>
          <li><a routerLink="/profile" routerLinkActive="active"><span class="material-icons">person</span> Profile</a></li>
        </ul>
      </nav>
    </aside>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
