import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentLoginComponent } from '../student-login/student-login.component';


@Component({
  selector: 'app-student-signup',
  standalone: true,
  imports: [FormsModule,RouterModule,StudentSignupComponent,StudentLoginComponent],
  templateUrl: './student-signup.component.html',
  styleUrl: './student-signup.component.css'
})
export class StudentSignupComponent {
  // private message=new BehaviorSubject("Initial message!");
   constructor(private Http:HttpClient,private router:Router,private routes:ActivatedRoute)
   {

   }
  
   student={
    rollNo:27000,
    name:"",
    dept:"",
    email:"",
    password:"",
    cPassword:""
    

   };
  
  insert()
  {
    console.log(this.student);
    this.Http.post("http://localhost:8083/insert",this.student).subscribe(
      (data)=>{
        console.log("data inserted",data);
        
        this.router.navigate(['studentLogin']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
 
  
 
 

}
