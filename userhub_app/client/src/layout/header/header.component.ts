import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import './header.component.css';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fb-header">
      <div class="fb-header-left">
        <span class="fb-logo-svg" style="display: flex; align-items: center; margin-right: 0.5rem;">
          <svg viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="20" fill="#1877f2"/>
            <path d="M25.5 21H22V32H17V21H14V17H17V15.5C17 13.57 18.57 12 20.5 12H25V16H22.5C22.22 16 22 16.22 22 16.5V17H25.5L25 21Z" fill="#fff"/>
          </svg>
        </span>
        <div class="fb-search-box">
          <span class="icon-svg" style="margin-right: 0.5rem;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#65676b" stroke-width="2"/>
              <line x1="14.5" y1="14.5" x2="18" y2="18" stroke="#65676b" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div class="fb-header-center">
        <a [ngClass]="{'active': activeTab === 'home'}" (click)="setActive('home')" title="Home" aria-label="Home" tabindex="0">
          <span class="icon-svg"><i class="fas fa-home"></i></span>
        </a>
        <a [ngClass]="{'active': activeTab === 'video'}" (click)="setActive('video')" title="Video" aria-label="Video" tabindex="0">
          <span class="icon-svg">
            <!-- Facebook Watch exact SVG: শুধু স্কয়ার bubble/monitor, কোনো stand নেই -->
            <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
              <rect x="6" y="7" width="16" height="12" rx="3" class="watch-bubble" />
            </svg>
          </span>
        </a>
        <a [ngClass]="{'active': activeTab === 'marketplace'}" (click)="setActive('marketplace')" title="Marketplace" aria-label="Marketplace" tabindex="0">
          <span class="icon-svg"><i class="fas fa-store"></i></span>
        </a>
        <a [ngClass]="{'active': activeTab === 'groups'}" (click)="setActive('groups')" title="Groups" aria-label="Groups" tabindex="0">
          <span class="icon-svg">
            <!-- Facebook Groups exact SVG -->
            <svg viewBox="0 0 28 28" width="28" height="28" fill="none">
              <circle cx="14" cy="14" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="10.5" cy="13" r="2.5" fill="#65676b"/>
              <circle cx="17.5" cy="13" r="2.5" fill="#65676b"/>
              <ellipse cx="14" cy="17.5" rx="6.5" ry="3.5" fill="#65676b" fill-opacity="0.2"/>
              <circle cx="14" cy="16" r="2" fill="#65676b"/>
            </svg>
          </span>
        </a>
        <a [ngClass]="{'active': activeTab === 'games'}" (click)="setActive('games')" title="Gaming" aria-label="Gaming" tabindex="0">
          <span class="icon-svg"><i class="fas fa-gamepad"></i></span>
        </a>
      </div>
      <div class="fb-header-right">
        <a class="menu" title="Menu" aria-label="Menu" tabindex="0"><span class="icon-svg"><i class="fas fa-th"></i></span></a>
        <a class="messenger" title="Messenger" aria-label="Messenger" tabindex="0"><span class="icon-svg"><i class="fab fa-facebook-messenger"></i></span></a>
        <a class="notif" title="Notifications" aria-label="Notifications" tabindex="0"><span class="icon-svg"><i class="fas fa-bell"></i></span><span class="badge">4</span></a>
        <a class="avatar" title="Profile" aria-label="Profile" tabindex="0">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
          <span class="avatar-badge"></span>
          <span class="avatar-dropdown"><i class="fas fa-chevron-down"></i></span>
        </a>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() darkMode = false;
  @Output() toggleDark = new EventEmitter<void>();
  activeTab: string = 'home';
  setActive(tab: string) { this.activeTab = tab; }
  ngOnInit() {}
}