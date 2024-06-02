import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  receivedObject: any;
  student:any=[];
  private subscription: Subscription;
  constructor(private sharedDataService: SharedDataService,private Http:HttpClient,private router:Router) {}
  // private ngUnsubscribe = new Subject();
  ngOnInit() {
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log("recived object",this.receivedObject);
      // let input=document.getElementById("inputEmail4");
      // input.def
      

     
    this.Http.get(`http://localhost:8083/studentDetailsGet/${this.receivedObject.rollNo}`).subscribe(
      (data)=>{
       
        this.student=data;
        console.log("student details",this.student);
      

        
      },
      (error)=>{
        alert("Invalid credentials! error")
        console.log(error);
      }
    )

    });
  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  

}
