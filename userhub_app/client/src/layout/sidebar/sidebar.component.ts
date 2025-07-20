import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import './sidebar.component.css';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <nav>
        <ul class="nav-main">
          <li><a><img class="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Me" /> <span>Shafiqul Islam</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M25.825 12.29l-10-9.5a1.5 1.5 0 00-2.05 0l-10 9.5A1.5 1.5 0 004.5 15h1v7.25A2.25 2.25 0 007.75 24.5h3.5v-5.25h5.5V24.5h3.5A2.25 2.25 0 0022.5 22.25V15h1a1.5 1.5 0 00.825-2.71z" fill="#1877f2"/></svg></span> <span>Friends</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" fill="#42b72a"/><path d="M14 7a7 7 0 100 14 7 7 0 000-14z" fill="#fff"/></svg></span> <span>Professional dashboard</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="12" rx="2" fill="#f02849"/><rect x="8" y="12" width="12" height="4" rx="1" fill="#fff"/></svg></span> <span>Feeds</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" fill="#1877f2"/><path d="M10 18v-4h8v4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="12" r="2" fill="#fff"/></svg></span> <span>Groups</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="12" rx="2" fill="#f7b928"/><rect x="8" y="12" width="12" height="4" rx="1" fill="#fff"/></svg></span> <span>Marketplace</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="12" rx="2" fill="#1877f2"/><rect x="8" y="12" width="12" height="4" rx="1" fill="#fff"/></svg></span> <span>Video</span></a></li>
          <li><a><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" fill="#65676b"/><path d="M10 18v-4h8v4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="12" r="2" fill="#fff"/></svg></span> <span>See more</span></a></li>
        </ul>
        <hr />
        <div class="shortcut-title">Your shortcuts</div>
        <ul class="nav-shortcuts">
          <li *ngFor="let shortcut of shortcuts"><img [src]="shortcut.img" alt="" /> <span>{{shortcut.name}}</span></li>
          <li><span class="icon-svg"> <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12" fill="#65676b"/><path d="M10 18v-4h8v4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="12" r="2" fill="#fff"/></svg></span> <span>See more</span></li>
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
  ngOnInit() {}
}
