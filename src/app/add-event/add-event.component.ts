import { Component,OnInit} from '@angular/core';
import {  Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { SharedDataService } from '../shared-data.component';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [MainComponent,StudentLoginComponent,RouterModule,FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  receivedObject: any;
  private subscription: Subscription;

  constructor(private sharedDataService: SharedDataService,private router:Router,private Http:HttpClient) {}
  event={
    eventId:9991,
    eventName:"",
    eventDate:"",
    eventDuration:"",
    eventDesc:"",
    eventOrganizer:"",
    eventCord:"",
    eventCordNo:""
  }
  ngOnInit() {
    
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log(this.receivedObject);
    });
    
  }
  insert()
  {
    console.log(this.event);
    this.Http.post("http://localhost:8083/insertEvent",this.event).subscribe(
      (data)=>{
        console.log("data inserted",data);
        
        this.router.navigate(['/teacherDashboard']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  

}
