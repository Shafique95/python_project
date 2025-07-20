import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './pages/app.component';
import { provideHttpClient } from '@angular/common/http';
import './theme/styles.css';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
})
  .catch((err) => console.error(err));
