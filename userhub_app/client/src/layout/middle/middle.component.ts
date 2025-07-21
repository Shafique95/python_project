import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-middle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="max-width: 600px; margin: 0 auto;">
      <div *ngFor="let post of posts" class="post-card">
        <div class="post-header">
          <img [src]="post.avatar" class="avatar" />
          <div>
            <div class="post-author">{{post.author}}</div>
            <div class="post-date">{{post.date}}</div>
          </div>
        </div>
        <div class="post-content">{{post.content}}</div>
        <img *ngIf="post.image" [src]="post.image" class="post-image" />
      </div>
    </div>
  `,
  styles: [
    `.post-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      margin-bottom: 2rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .post-header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    .post-author {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .post-date {
      color: #888;
      font-size: 0.9rem;
    }
    .post-content {
      font-size: 1.1rem;
      color: #222;
    }
    .post-image {
      width: 100%;
      border-radius: 8px;
      margin-top: 0.5rem;
      max-height: 350px;
      object-fit: cover;
    }
  `]
})
export class MiddleComponent {
  posts = [
    {
      author: 'Shafiqul Islam',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Just now',
      content: 'নতুন ফিচার ডেমো পোস্ট! Facebook-এর মতো ফিড UI!',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    },
    {
      author: 'Afzal Hossen',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      date: '2 hours ago',
      content: 'আজকের প্রকল্পে অনেক কিছু শিখলাম!',
      image: ''
    },
    {
      author: 'Mehedi Khan',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      date: 'Yesterday',
      content: 'AI pair programming দারুণ!',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    },
    // ১৭টি ডেমো পোস্ট
    ...Array.from({length: 17}).map((_, i) => ({
      author: `Demo User ${i+1}`,
      avatar: `https://randomuser.me/api/portraits/men/${10+i}.jpg`,
      date: `${i+2} days ago`,
      content: `এটি ডেমো পোস্ট নম্বর ${i+4}. Facebook-style scroll টেস্ট!`,
      image: i % 2 === 0 ? `https://source.unsplash.com/random/600x30${i}` : ''
    }))
  ];
} 