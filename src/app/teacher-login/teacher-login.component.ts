import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavigationExtras } from "@angular/router";
import { SharedDataService } from '../shared-data.component';
import { StudentSignupComponent } from '../student-signup/student-signup.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
@Component({
  selector: 'app-teacher-login',
  standalone: true,
  imports: [FormsModule,NgIf,StudentLoginComponent,StudentSignupComponent,RouterModule],
  templateUrl: './teacher-login.component.html',
  styleUrl: './teacher-login.component.css'
})
export class TeacherLoginComponent {
  id:number;
  email:String="";
  password:String="";
  check:boolean=false;
  teacher:any=[];
  constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute,private shared: SharedDataService)
  {
     
  }
  teacherLogin() {
    this.http.get(`http://localhost:8083/teacherLogin/${this.id}`).subscribe(
      (data)=>{
        
        this.teacher=data;
      
  
        if(data==null)
        {
          alert("Invalid credentials!");
        }
        else if(this.password===this.teacher.password && this.email===this.teacher.email)
        {
        //  this.sendData(this.student1.name);
        const myObject=this.teacher;
        this.shared.updateSharedObject(myObject);
          this.router.navigate(['teacherDashboard',{data:this.teacher.name}]);
        }
        else if(this.password!=this.teacher.password || this.email!=this.teacher.email){
          // this.check=true;
          alert("please check email and password again!");
        }
        
      },
      (error)=>{
        console.log(error);
      }
      
      
      
    )
      }
}
