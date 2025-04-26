import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task';

  boxColor = 'red';
  rotation = 0;
  width = 200;
  height = 200;

  changeColor(color: string) {
    this.boxColor = color;
  }

  rotateBox(direction: string) {
    if(direction === 'plus') {
      this.rotation += 10;

    } else {
      this.rotation -=10;
    }
  }
}
