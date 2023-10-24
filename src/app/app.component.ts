import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá Mundo"></app-title>
  <router-outlet></router-outlet>`
})
export class AppComponent {
}
