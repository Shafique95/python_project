import { Component } from '@angular/core';
import './footer.component.css';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer class="footer">&copy; 2024 UserHub. All rights reserved.</footer>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
