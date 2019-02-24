import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSelect() {
    console.log('onSelect');
    let a = document.getElementById('main');
    a.style.display = 'none';
  }
}


