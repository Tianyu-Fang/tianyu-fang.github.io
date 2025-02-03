import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  constructor() {
    document.body.classList.add('light-theme'); // Apply light mode
  }
}
