import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.component';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-student',
  standalone: true,
  imports: [NgFor,FormsModule,RouterModule],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent {
  receivedObject: any;
  private subscription: Subscription;

  constructor(private Http:HttpClient,private sharedDataService: SharedDataService,private router:Router)
  {

  }
  studentMarks:any=[];
  studentMarksPercentfinal:any=[];
  studentMarksAll:any=[];
  student:any=[];
  studentDept:any=[];
  l:number;
  i:number;
  k:number;
  z:number;
  percent:number;
  j:number=0;
  n:number=0;
  studentfinal={
    rollNo:9,
    name:"",
    dept:"",
    result:100,
    attendance:10

  }
  ngOnInit()
  {
    this.subscription = this.sharedDataService.sharedObject$.subscribe((data) => {
      this.receivedObject = data;
      console.log(this.receivedObject);
    });
   
  //  console.log(this.teacher);
   this.Http.get("http://localhost:8083/getAll").subscribe(
     (data)=>{
       console.log("data inserted",data);
       this.student=data;
      //  this.router.navigate(['']);
      console.log(this.student.length);
      this.l=this.student.length;
      
     for(this.i=0;this.i<this.l;this.i++)
     {
      if(this.student[this.i].dept==this.receivedObject.dept)
      {
        // this.studentDept.push_back(this.student[this.i]);
        this.studentDept[this.j]=this.student[this.i];
        this.j++;
        
      }
     }

     console.log("student dept: ",this.studentDept);
     },
     (error)=>{
       console.log(error);
     }
   )
      // for result fetching
   this.Http.get("http://localhost:8083/getAllRes").subscribe(
     (data)=>{
      //  console.log("data inserted",data);
       this.studentMarksAll=data;
      console.log("All MArks",this.studentMarksAll);
      this.l=this.studentMarksAll.length;
      for(this.k=0;this.k<this.studentDept.length;this.k++){
     for(this.i=0;this.i<this.l;this.i++)
     {
      if(this.studentMarksAll[this.i].rollNo == this.studentDept[this.k].rollNo)
      {
        // this.studentDept.push_back(this.student[this.i]);
        this.studentMarks[this.n]=this.studentMarksAll[this.i];
        this.n++;
        
      }
     }
    }
     console.log("Branchwise Marks: ",this.studentMarks);
     for(this.k=0;this.k<this.studentDept.length;this.k++){
      for(this.i=0;this.i<this.studentMarks.length;this.i++)
      {
       if(this.studentMarks[this.i].rollNo == this.studentDept[this.k].rollNo)
       {
         // this.studentDept.push_back(this.student[this.i]);
          this.percent=(this.studentMarks[this.i].sub1M+this.studentMarks[this.i].sub2M+this.studentMarks[this.i].sub3M+this.studentMarks[this.i].sub4M+this.studentMarks[this.i].sub5M)/5;
          console.log(this.percent);
          this.studentfinal.result=this.percent;
          this.studentfinal.rollNo=this.studentDept[this.k].rollNo;
          this.studentfinal.name=this.studentDept[this.k].name;
          this.studentfinal.dept=this.studentDept[this.k].dept;
          this.studentfinal.attendance=this.studentMarks[this.i].attendance;
          this.studentMarksPercentfinal[this.k]=this.studentfinal;
          this.studentfinal={
            rollNo:9,
            name:"",
            dept:"",
            result:100,
            attendance:10
        
          }
          break;
       }else{
        this.studentfinal.result=0;
        this.studentfinal.rollNo=this.studentDept[this.k].rollNo;
        this.studentfinal.name=this.studentDept[this.k].name;
        this.studentfinal.dept=this.studentDept[this.k].dept;
        this.studentfinal.attendance=0;
        this.studentMarksPercentfinal[this.k]=this.studentfinal;
        this.studentfinal={
          rollNo:9,
          name:"",
          dept:"",
          result:100,
          attendance:10
      
        }
        // break;
       }
      }
      
     }
     console.log("Branchwise Marks Final: ",this.studentMarksPercentfinal);
     },
     (error)=>{
       console.log(error);
     }
   )
 


      

  }
  
}
