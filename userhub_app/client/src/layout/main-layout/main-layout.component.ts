import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { MiddleComponent } from '../middle/middle.component';
import './main-layout.component.css';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RightSidebarComponent, MiddleComponent],
  template: `
    <app-header [darkMode]="darkMode" (toggleDark)="toggleDark()"></app-header>
    <div class="main-layout-scroll">
      <aside class="sidebar-container"><app-sidebar></app-sidebar></aside>
      <div class="main-content">
        <app-middle></app-middle>
      </div>
      <aside class="right-sidebar-container"><app-right-sidebar></app-right-sidebar></aside>
    </div>
  `,
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  darkMode = false;
  toggleDark() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
} 