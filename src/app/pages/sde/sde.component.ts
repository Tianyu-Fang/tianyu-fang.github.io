import { Component } from '@angular/core';

@Component({
  selector: 'app-sde',
  imports: [],
  templateUrl: './sde.component.html',
  styleUrl: './sde.component.css'
})
export class SdeComponent {
  constructor() {
    document.body.classList.remove('light-theme'); //dark mode
  }
}
