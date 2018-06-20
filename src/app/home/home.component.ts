import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Employeedomain","expand":true,"children":[{"text":"Employee Registration","routerLink":"employeedomain/employeeregistration","selected":false},{"text":"Employee Details","routerLink":"employeedomain/employeedetails","selected":false},{"text":"Employee list","routerLink":"employeedomain/employeelist","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
