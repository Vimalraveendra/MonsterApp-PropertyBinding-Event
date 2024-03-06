import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Monster } from './model/monster.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'monster-app-property-bind-event';
  isFetching:boolean=false;
  monsters:Monster[]=[];
  error:boolean=null;
  subscription:Subscription
  constructor(private  http:HttpClient){}
  ngOnInit() {
      this.subscription=this.fetchUsers();
  }

  private fetchUsers(){
    this.isFetching=true;
    return this.http.get("https://jsonplaceholder.typicode.com/users")
     .subscribe({
      next:(users:Monster[])=>{
        this.isFetching =false;
        this.monsters=users;
      },
      error:(error:any)=>{
        this.isFetching =false;
        this.error=error.message;
      }
     }
     
     )
   }
}
