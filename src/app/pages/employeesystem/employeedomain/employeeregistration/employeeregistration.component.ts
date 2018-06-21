/**
 * Created by: Demo User
 * Date: 21/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeeregistration',
  templateUrl: 'employeeregistration.component.html'
})
export class EmployeeregistrationComponent implements OnInit{
  employeeregistrationModel:EmployeeregistrationModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.employeeregistrationModel=new EmployeeregistrationModel();
     	 	this.radiogroupData={"data":[{"genderId":"1","gender":"female"},{"genderId":"2","gender":"male"}]};
	  }
  onSelection_chk(eventData:any){ 
this.employeeregistrationModel.parAddresslabel =this.employeeregistrationModel.tempAddLabel; 
this.employeeregistrationModel.parAddressone =this.employeeregistrationModel.tempAddone; 
this.employeeregistrationModel.parcity =this.employeeregistrationModel.tempCity; 
this.employeeregistrationModel.parZip =this.employeeregistrationModel.tempZip; 

 } 
  onClick_saveBtn(eventData:any){ 
let response: any;
const requestJson={
id :this.employeeregistrationModel.id,
firstName :this.employeeregistrationModel.firstName,
lastName :this.employeeregistrationModel.lastName,
genderId :this.employeeregistrationModel.genderId,
age :this.employeeregistrationModel.age,
dob :this.employeeregistrationModel.dob,
phone :this.employeeregistrationModel.phone,
email :this.employeeregistrationModel.email,
departmentId :this.employeeregistrationModel.departmentId,
};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/save',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.saveBtnBindResponse_1(response);
});
}
saveBtnBindResponse_1(response: any){

 } 
  ngOnInit(){
 		  }
 	 	}

export class EmployeeregistrationModel{
  id: string;  firstName: string;  lastName: string;  genderId: string;  age: number;  dob: string;  phone: string;  email: string;  departmentId: string;  tempAddLabel: string;  tempAddone: string;  tempCity: string;  tempZip: number;  chk: string;  parAddresslabel: string;  parAddressone: string;  parcity: string;  parZip: number; }
