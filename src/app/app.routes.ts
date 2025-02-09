import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SdeComponent } from './pages/sde/sde.component';
import { DataComponent } from './pages/data/data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sde', component: SdeComponent },
  { path: 'data', component: DataComponent }
];
