import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="background-color: #1e1e1e; color: #31fdf1">Rxjs beginner demos</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-beginner-demo';
}
