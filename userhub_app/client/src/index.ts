import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './pages/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './routes/app.routes';
import './theme/styles.css';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)]
})
  .catch((err) => console.error(err));
