import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-res-view',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule,NgIf],
  templateUrl: './student-res-view.component.html',
  styleUrl: './student-res-view.component.css'
})
export class StudentResViewComponent {
  receivedObject: any;
  private subscription: Subscription;
  name:string="";
  dept:"";
  roll:number=27000;
  percent:number;
  studentRes:any=[];
  studentDet:any=[];
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

    this.Http.get(`http://localhost:8083/studentDetailsGet/${this.receivedObject.rollNo}`).subscribe(
      (data)=>{
       
        
          this.studentDet=data;
          console.log(this.studentDet.moterName);
        
       
        
      },
      (error)=>{
        console.log(error);
      }
    )
    
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
  getResult()
  {
    this.Http.get(`http://localhost:8083/studentResult/${this.receivedObject.rollNo}`).subscribe(
      (data)=>{
       
        if(data==null)
        {
          alert("Result is not available...")
        }else{
          this.studentRes=data;
          console.log(this.studentRes);
          this.percent=(this.studentRes.sub1M+this.studentRes.sub2M+this.studentRes.sub3M+this.studentRes.sub4M+this.studentRes.sub5M)/5;
          console.log(this.percent);
        }
       
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
