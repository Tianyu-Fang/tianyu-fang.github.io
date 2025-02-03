import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { SdeComponent } from './app/pages/sde/sde.component';
import { DataComponent } from './app/pages/data/data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sde', component: SdeComponent },
  { path: 'data', component: DataComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Register routes here
}).catch(err => console.error(err));
