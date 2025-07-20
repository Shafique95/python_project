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
        <ul class="nav-main">
          <li><a><img class="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Me" /> <span>Shafiqul Islam</span></a></li>
          <li><a><span class="material-icons">group</span> <span>Friends</span></a></li>
          <li><a><span class="material-icons">dashboard</span> <span>Professional dashboard</span></a></li>
          <li><a><span class="material-icons">rss_feed</span> <span>Feeds</span></a></li>
          <li><a><span class="material-icons">groups</span> <span>Groups</span></a></li>
          <li><a><span class="material-icons">storefront</span> <span>Marketplace</span></a></li>
          <li><a><span class="material-icons">ondemand_video</span> <span>Video</span></a></li>
          <li><a><span class="material-icons">expand_more</span> <span>See more</span></a></li>
        </ul>
        <hr />
        <div class="shortcut-title">Your shortcuts</div>
        <ul class="nav-shortcuts">
          <li *ngFor="let shortcut of shortcuts"><img [src]="shortcut.img" alt="" /> <span>{{shortcut.name}}</span></li>
          <li><span class="material-icons">expand_more</span> <span>See more</span></li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <a>Privacy</a> · <a>Terms</a> · <a>Advertising</a> · <a>Ad Choices</a> · <a>Cookies</a> · <span>More</span> · <span>Meta © 2025</span>
      </div>
    </aside>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  shortcuts = [
    { name: 'SDLC PRO', img: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'Crypto World-Buy-Sell', img: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { name: 'Flutter Bangladesh', img: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: 'CPS Academy', img: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { name: 'To-Let Rajshahi', img: 'https://randomuser.me/api/portraits/men/16.jpg' }
  ];
  ngOnInit() {
    if (!document.getElementById('material-icons-font')) {
      const link = document.createElement('link');
      link.id = 'material-icons-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(link);
    }
  }
}
