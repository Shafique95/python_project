import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { HomePageComponent } from '../pages/home/home.page';
import { AboutPageComponent } from '../pages/about/about.page';
import { ProfilePageComponent } from '../pages/profile/profile.page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ]
  }
];
