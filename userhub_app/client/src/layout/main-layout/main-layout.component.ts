import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import './main-layout.component.css';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, RightSidebarComponent],
  template: `
    <app-header [darkMode]="darkMode" (toggleDark)="toggleDark()"></app-header>
    <aside class="sidebar-container"><app-sidebar></app-sidebar></aside>
    <aside class="right-sidebar-container"><app-right-sidebar></app-right-sidebar></aside>
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