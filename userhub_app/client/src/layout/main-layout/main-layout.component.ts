import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';
import { RouterOutlet } from '@angular/router';
import './main-layout.component.css';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RightSidebarComponent, RouterOutlet],
  template: `
    <app-header [darkMode]="darkMode" (toggleDark)="toggleDark()"></app-header>
    <div class="main-layout">
      <aside class="sidebar-container"><app-sidebar></app-sidebar></aside>
      <main class="main-content"><router-outlet></router-outlet></main>
      <aside class="right-sidebar-container"><app-right-sidebar></app-right-sidebar></aside>
    </div>
    <app-footer></app-footer>
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