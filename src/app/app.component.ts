import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeGabrielBarreto';
  numbers: any;
  times: any;
  numeros: any;
  num: any;
  result: any;


  ngOnInit() {
    this.times = 0;
    this.numeros = [];
    this.num = [];
  }


// tslint:disable-next-line: typedef
adicionar(){
  this.numeros.push(this.numbers);
  this.times += 1;
  console.log(this.numeros);
  if (this.times === 10){
      this.numeros.sort(this.showNumbers);
      console.log(this.numeros);
      this.result = this.numeros;
  }
  }


  showNumbers(a, b){
  return (a - b);
  }





}
