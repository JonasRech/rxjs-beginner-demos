import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Rxjs beginner demos</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-beginner-demo';
}
