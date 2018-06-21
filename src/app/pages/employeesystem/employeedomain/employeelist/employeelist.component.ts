/**
 * Created by: Demo User
 * Date: 21/06/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'employeelist',
  templateUrl: 'employeelist.component.html'
})
export class EmployeelistComponent implements OnInit{
  employeelistModel:EmployeelistModel;
 
  constructor(private http: HttpClient) {
    this.employeelistModel=new EmployeelistModel();
       }
  ngOnInit(){
  }
 }

export class EmployeelistModel{
 }
