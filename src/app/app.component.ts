import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <app-title *ngIf="destruir"></app-title> 

 <br>

 <button (click)="destruirComponent()"> Destruir Component</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir : boolean =  true;

 
  ngOnInit(): void { }

  public destruirComponent(){
    this.destruir = false;
  }
  

}
