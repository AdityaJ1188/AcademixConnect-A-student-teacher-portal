import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentSignupComponent } from '../student-signup/student-signup.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-signup',
  standalone: true,
  imports: [FormsModule,RouterModule,StudentSignupComponent,StudentLoginComponent],
  templateUrl: './teacher-signup.component.html',
  styleUrl: './teacher-signup.component.css'
})
export class TeacherSignupComponent {
  constructor(private Http:HttpClient,private router:Router,private routes:ActivatedRoute)
  {

  }
 
  teacher={
   id:11000,
   name:"",
   dept:"",
   email:"",
   password:"",
   cPassword:""
   

  };
 
 insert()
 {
   console.log(this.teacher);
   this.Http.post("http://localhost:8083/insertteach",this.teacher).subscribe(
     (data)=>{
       console.log("data inserted",data);
       
       this.router.navigate(['/teacherLogin']);
     },
     (error)=>{
       console.log(error);
     }
   )
 }
}
