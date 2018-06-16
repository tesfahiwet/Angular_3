import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>AngularThree</h1>
        <a routerLink="/">Home</a> | <a routerLink="/farmers-market">Farmers Market</a>
        <router-outlet></router-outlet>
  `,
    styles: []
})
export class AppComponent {
    title = 'app';
}
