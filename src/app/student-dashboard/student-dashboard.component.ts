import { Component,OnInit} from '@angular/core';
import {  Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { SharedDataService } from '../shared-data.component';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [MainComponent,StudentLoginComponent,RouterModule,FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {

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
 


  // receivedObject: any;
  // private subscription: Subscription;

  // constructor(private sharedDataService: StudentLoginComponent) {
  //   this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
  //     this.receivedObject = data;
  //     console.log(this.receivedObject);
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }







  // msg:number=0;
  // constructor(private studentmsg:StudentLoginComponent)
  // {
  //   this.studentmsg.getMessage.subscribe(
  //     message=>this.msg=message
      
  //   )
  //   console.log(this.msg);
    // console.log(this.msg.name);
  // }
  // constructor(private router:Router)
  // {

  // }

  // msg: any;

  // constructor(private router:Router,private route:ActivatedRoute ) {
    
    
  // }
  
  // ngOnInit() {
  //   this.msg = this.route.snapshot.paramMap.get('data');
  //   console.log(this.msg);
  // }
  
 
  
  
}
