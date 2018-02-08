import { Component } from '@angular/core';

import { LoginComponentComponent } from './login-component/login-component.component';
import { MasterPageComponent } from './master-page/master-page.component';




// const route : Routes = [
//   {path:'',component:LoginComponentComponent},
//   {path:'landing',component:MasterPageComponent},

// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
}






