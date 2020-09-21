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
  visibility: any;


  ngOnInit() {
    this.times = 0;
    this.numeros = [];
    this.visibility = false;
  }


// tslint:disable-next-line: typedef
adicionar(){
  this.numeros.indexOf(this.numbers);

  if (this.numeros.indexOf(this.numbers) !== -1){
    alert('Existe o mesmo numero adicionado na lista');
    return;

  }

  if (this.times === 10){
    alert('Favor limpar a lista para adicionar mais numeros');
    return;
  }

  this.numeros.push(this.numbers);
  this.times += 1;



  if (this.times === 10){
      this.numeros.sort(this.showNumbers);
      this.result = this.numeros;
      this.visibility = true;
  }
  }


  showNumbers(a, b){
  return (a - b);
  }


  clearList(){
    // tslint:disable-next-line: deprecation
    document.location.reload(true);
  }




}
