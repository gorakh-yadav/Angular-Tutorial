import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  UserData:any={};
 GetValue(data: NgForm)
 {
 this.UserData=data;

 }

}
