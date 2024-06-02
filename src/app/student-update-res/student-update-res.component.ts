import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-update-res',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule,NgIf],
  templateUrl: './student-update-res.component.html',
  styleUrl: './student-update-res.component.css'
})
export class StudentUpdateResComponent {
  receivedObject: any;
  private subscription: Subscription;
  name:string="";
  dept:"";
  roll:number=27000;
  student:any=[];
  stdUpRes={
    rollNo:27,
    sub1:"",
    sub1M:"",
    sub2:"",
    sub2M:"",
    sub3:"",
    sub3M:"",
    sub4:"",
    sub4M:"",
    sub5:"",  
    sub5M:"",
    attendance:100,

  }
 
  
  constructor(private sharedDataService: SharedDataService,private Http:HttpClient,private router:Router) {}
  // private ngUnsubscribe = new Subject();
  ngOnInit() {
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log(this.receivedObject);
    });
    
  }
 
  
  
  
  
   
  insert()
  {
    console.log(this.stdUpRes);
    this.Http.put("http://localhost:8083/stdRes",this.stdUpRes).subscribe(
      (data)=>{
        console.log("data inserted",data);
        // alert()
       
        

        
      },
      (error)=>{
        alert("Invalid credentials! error")
        console.log(error);
      }
    )

  }
  searchStd()
  {
    this.Http.get(`http://localhost:8083/studentLogin/${this.roll}`).subscribe(
      (data)=>{
       
        if(data==null)
        {
          alert("Invalid credentials!");
        }else{
          this.student=data;
          this.stdUpRes.rollNo=this.roll;
          console.log(this.stdUpRes.rollNo);
        }
       
        
      },
      (error)=>{
        console.log(error);
      }
      
    )




}
}
