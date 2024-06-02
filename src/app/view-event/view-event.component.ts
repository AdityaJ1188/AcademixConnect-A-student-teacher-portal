import { Component,OnInit} from '@angular/core';
import {  Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { SharedDataService } from '../shared-data.component';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [MainComponent,StudentLoginComponent,RouterModule,FormsModule,NgFor],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css'
})
export class ViewEventComponent {

  receivedObject: any;
  private subscription: Subscription;
  event:any=[];
  constructor(private sharedDataService: SharedDataService,private router:Router,private Http:HttpClient) {}

  ngOnInit() {
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log(this.receivedObject);
    });
    

    this.Http.get("http://localhost:8083/getAllEvent").subscribe(
      (data)=>{
        console.log("data inserted",data);
       this.event=data;
       this.event.reverse();
       console.log("reversed",this.event);
        // this.router.navigate(['/teacherDashboard']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  


  // for sending object to update componenet
  sendData()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['studentUpdate',{data:this.receivedObject}]);
         
  }
  sendDataViewRes()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['studentViewRes',{data:this.receivedObject}]);
         
  }
  sendDataViewEvent()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['viewEvents',{data:this.receivedObject}]);
         
  }
}
