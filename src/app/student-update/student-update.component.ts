import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterModule,NgIf],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  receivedObject: any;
  private subscription: Subscription;
  name:string="";
  dept:"";
  stdo={
    rollNo:10,
   course:"",
   admissionYear:"",
   currentClass:"",
   moterName:"",
   dateOfBirth:"",
   mobNo:"",
   address:""
  }

  //  stdo: {
  //   rollNo: number,
  //   course: string,
  //   admissionYear: string,
  //   currentClass: string,
  //   moterName: string,
  //   dateOfBirth: string,
  //   mobNo: string,
  //   address: string
  // };
  
  constructor(private sharedDataService: SharedDataService,private Http:HttpClient,private router:Router) {}
  // private ngUnsubscribe = new Subject();
  ngOnInit() {
    // Subscribe during component initialization
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log("recived object",this.receivedObject);
      this.stdo.rollNo=this.receivedObject.rollNo;
      this.name=this.receivedObject.name;
      console.log(this.name);
      this.dept=this.receivedObject.dept;
      // let input=document.getElementById("inputEmail4");
      // input.def
    });
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  
   b:boolean=false;//for not showing inserted after invalid credentials
   x:boolean=false;//for not showing inserted after invalid credentials
   
  insert()
  {
    this.Http.put("http://localhost:8083/studentDetailsSave",this.stdo).subscribe(
      (data)=>{
        console.log("data inserted",data);
        // alert()
        if(this.stdo.rollNo<27000 || this.stdo.rollNo>99999)
        {
          this.b=true;
          this.x=this.b;
          console.log(this.b);
          alert("Invalid credentials!")
        }else{
          this.router.navigate(['studentDashboard']);
        }
        

        
      },
      (error)=>{
        alert("Invalid credentials! error")
        console.log(error);
      }
    )

  }
  navgate()
  {
    // this.router.navigate(['studentDashboard']);
  }


}
