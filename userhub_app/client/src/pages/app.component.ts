import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserCreateFormComponent } from '../components/user-create-form/user-create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserListComponent, UserCreateFormComponent],
  template: `
    <div class="app-main-container">
      <div class="app-header sticky-header">
        <h1>UserHub</h1>
        <span class="subtitle">The most beautiful user manager in the world</span>
        <div class="welcome-anim">
          <span *ngFor="let c of welcomeChars; let i = index" [style.animationDelay]="(i*0.04)+'s'">{{c}}</span>
        </div>
        <button class="toggle-mode" (click)="toggleDark()">{{darkMode ? '🌙' : '☀️'}}</button>
      </div>
      <div class="app-card">
        <app-user-create-form (userCreated)="onUserCreated()"></app-user-create-form>
      </div>
      <div class="app-card">
        <app-user-list #userList (confetti)="triggerConfetti()"></app-user-list>
      </div>
      <canvas id="confetti-canvas"></canvas>
      <footer class="footer">Made with ❤️ by Atik Vai</footer>
    </div>
  `,
  styleUrls: ['app.css']
})
export class AppComponent {
  @ViewChild('userList') userListComp?: UserListComponent;
  darkMode = false;
  welcomeChars = Array.from('Welcome, Atik Vai!');

  onUserCreated() {
    this.userListComp?.reload();
    this.triggerConfetti();
  }

  toggleDark() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

  triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confettiColors = ['#1877f2','#31a24c','#e53935','#ffb300','#fff'];
    const pieces = Array.from({length: 80}, () => ({
      x: Math.random()*canvas.width,
      y: Math.random()*-canvas.height,
      r: Math.random()*8+4,
      c: confettiColors[Math.floor(Math.random()*confettiColors.length)],
      s: Math.random()*2+1
    }));
    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (const p of pieces) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI);
        ctx.fillStyle = p.c;
        ctx.fill();
        p.y += p.s*3;
        if (p.y > canvas.height) p.y = Math.random()*-canvas.height;
      }
      frame++;
      if (frame < 60) requestAnimationFrame(draw);
      else if (ctx) ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
  }
} 