import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <!-- <app-title title="Olá Mundo"></app-title> -->

  {{ valor }}
  <button (click)="addicionar()">adicionar</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  public valor: number = 1;

  public addicionar(): number {
    return this.valor += 1;
  }
  ngOnInit(): void { }

  ngDoCheck(): void {
    console.log("ngDocheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngDocngAfterViewInitheck")
  }


  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

}
