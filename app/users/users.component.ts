import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService :UserServiceService) { }
  users:any[]=[]
  somethingWrong:any;
  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    },errorData=>{
     this.somethingWrong=errorData;
    })
  }

}
