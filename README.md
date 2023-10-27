# AulasAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# aulas-de-angular


falando de angular iniciando com um boa pratica, limpando o cod,
 trazendo o   template: '<router-outlet></router-outlet>'  para app.component e eliminando o html, scss, e spec do component inicial.
 

iniciando com o siclo de vida no Angular
ngOnInit

 ngOnInit(): void {
    setTimeout(() => {
      console.log(1)
    }, 5000)
  }

  este pequeno trecho de cod, vai esperar o angular iniciar, apos seu inicio depois de 5 segundo trara o console.log(1)

  proximo commit vai falar do ngOnChange e seu siclo quando é chamado.

  ex: 

dentro do AppComponent chamando um app-title e ao chamar ele passamos um dado de fora 
veja a baixo.


no title temos a informção de  @Input() public title : string= 'Bem vindo'; bem vindo com o input.
ao carrega a view vai atualizar o dado com o dado que esta vindo de fora com o Olá mundo dentro de

 <app-title title="Olá Mundo"></app-title>

  @Component({
  selector: 'app-root',
  template: `
  <app-title title="Olá Mundo"></app-title>
  <router-outlet></router-outlet>`
})
export class AppComponent {
}

analizando o siclo de vida do angular 

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

ao criar o valor e passar uma função para o botão add, 
chamaremos tres components do siclo de vida do angular, sendo eles:

ngDocheck
ngAfterContentChecked
ngAfterViewChecked

para isto criamos 
 interpoletion: {{ valor }}

 e a função para add dentro do butão adicionar; 
  <button (click)="addicionar()">adicionar</button>

  public addicionar(): number {
    return this.valor += 1;
  }

execultando algo dentro desta função termos o siclo de vida conforme já citado a cima!
veja quais:

ngDocheck
ngAfterContentChecked
ngAfterViewChecked

efetuamos agora um ngDetroy

para destruir um component ao ser executado!

veja : 

passmos um ngIf para o parametro destruir;
 <app-title *ngIf="destruir"></app-title> 

  
 iniciamos ele com true
 public destruir : boolean =  true;


feito uma função para tornar ele falso
 public destruirComponent(){
    this.destruir = false;
  }

Mostrando o siclo de vida no console 
 ngOnDestroy(): void {
    console.log("deu bom este component foi destruido com sucesso!")
  }

 <br>

 <button (click)="destruirComponent()"> Destruir Component</button>


O ciclo de vida no Angular é composto por uma série de eventos que ocorrem durante o ciclo de vida de um componente ou diretiva. Esses eventos permitem que você controle o comportamento e a execução de código em diferentes estágios da vida de um componente. Os principais métodos do ciclo de vida no Angular são:



1. ngOnChanges

   - Para que serve: Este método é chamado sempre que um valor de entrada (`@Input`) de um componente muda.

   - Explicação: É útil quando você precisa reagir a mudanças nos dados de entrada e atualizar o estado interno do componente com base nesses dados.



2. ngOnInit

   - Para que serve: É chamado uma única vez após a inicialização do componente.

   - Explicação: Use este método para realizar inicializações que precisam ocorrer assim que o componente é criado, como buscar dados iniciais de um serviço.



3. ngDoCheck

   - Para que serve: É chamado durante cada ciclo de detecção de mudanças.

   - Explicação: É útil quando você precisa realizar verificações manuais para detectar mudanças que não são detectadas automaticamente pelo Angular, como alterações em objetos ou arrays.



4. ngAfterContentInit

   - Para que serve: É chamado depois que o Angular projeta o conteúdo na visão do componente (dentro das tags `<ng-content>`).

   - Explicação: Use este método quando precisar interagir com elementos projetados no componente.



5. ngAfterContentChecked

   - Para que serve: É chamado após cada verificação do conteúdo projetado.

   - Explicação: Útil quando você precisa realizar ações após a verificação do conteúdo projetado, como atualizar cálculos com base nesse conteúdo.



6. ngAfterViewInit

   - Para que serve: É chamado depois que o Angular inicializa as visualizações do componente e as visualizações filhas.

   - Explicação: Use este método quando precisar interagir com elementos do DOM após a inicialização da visualização.



7. ngAfterViewChecked

   - Para que serve: É chamado após cada verificação da visualização do componente.

   - Explicação: Útil para realizar ações após a verificação da visualização, como atualizar informações com base no estado atual da visualização.



8. ngOnDestroy

   - Para que serve: É chamado antes de um componente ser destruído.

   - Explicação: Útil para liberar recursos, cancelar assinaturas e executar tarefas de limpeza antes de um componente ser removido.



Entender e utilizar esses métodos do ciclo de vida é fundamental para controlar o comportamento e o estado dos seus componentes Angular de forma eficaz.