import { Component,OnInit} from '@angular/core';
import {  Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { SharedDataService } from '../shared-data.component';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [MainComponent,StudentLoginComponent,RouterModule,FormsModule],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent {
  receivedObject: any;
  private subscription: Subscription;

  constructor(private sharedDataService: SharedDataService,private router:Router) {}

  ngOnInit() {
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log(this.receivedObject);
    });
    
  }

  


  // for sending object to update componenet
  sendDataView()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['viewStudent',{data:this.receivedObject}]);
         
  }
  sendDataUpdate()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['studentUpdateResAtt',{data:this.receivedObject}]);
         
  }
  sendDataEvent()
  {
    console.log("clicked")
    const myObject=this.receivedObject;
        this.sharedDataService.updateSharedObject(myObject);
          this.router.navigate(['manageEvents',{data:this.receivedObject}]);
         
  }



}
