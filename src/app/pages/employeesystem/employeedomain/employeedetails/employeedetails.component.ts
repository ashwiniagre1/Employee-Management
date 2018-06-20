/**
 * Created by: deepali arvind
 * Date: 20/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeedetails',
  templateUrl: 'employeedetails.component.html'
})
export class EmployeedetailsComponent implements OnInit{
  employeedetailsModel:EmployeedetailsModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.employeedetailsModel=new EmployeedetailsModel();
     	 	this.radiogroupData={"data":[{"gender":"female","genderId":"1"},{"gender":"male","genderId":"2"}]};
	  }
  onClick_Btn(eventData:any){ 
let response: any;
const requestJson={
id :this.employeedetailsModel.empId,
};
this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/findById',requestJson).subscribe(
(res: any) => {
response = res;
},
(error: any) => {

 },
 () => {
this.BtnBindResponse_1(response);
});
}
BtnBindResponse_1(response: any){
this.employeedetailsModel.firstName =response.response.firstName; 
this.employeedetailsModel.lastName =response.response.lastName; 
this.employeedetailsModel.phone =response.response.phone; 
this.employeedetailsModel.dob =response.response.dob; 
this.employeedetailsModel.genderId =response.response.genderId; 
this.employeedetailsModel.age =response.response.age; 
this.employeedetailsModel.emailId =response.response.email; 
this.employeedetailsModel.departmentId =response.response.departmentId; 


 } 
  onSelection_genderId(eventData:any){ 
this.employeedetailsModel.phone =this.employeedetailsModel.genderId; 

 } 
  ngOnInit(){
 	  }
 	 	

   
}
export class EmployeedetailsModel{
  empId: string;  firstName: string;  lastName: string;  phone: string;  dob: string;  genderId: string;  age: number;  emailId: string;  departmentId: string; }
