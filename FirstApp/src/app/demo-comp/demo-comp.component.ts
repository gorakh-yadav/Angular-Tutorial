import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent {

  title = 'First Angular App ';
  color='White';
  paint="";
  bgcolor="";
  users=["Gorakh","Balaso","Yadav"];

  Details=[

    {Name:'Gorakh',Email:'gorakh@gmail.com',Pin:'12345',Socail:['FB','Twitter','Outllok']},
    {Name:'Balaso',Email:'Balaso@gmail.com',Pin:'56789',Socail:['FB','Twitter','Outllok']},
    {Name:'Yadav',Email:'Yadav@gmail.com',Pin:'89076',Socail:['FB','Twitter','Outllok']},
  ]
  GetAlert()
  {
alert("Function Called");

  }
  ChangeColor()
  {

    this.paint="Red";
    this.bgcolor="black";
  }
}
