import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavigationExtras } from "@angular/router";
import { SharedDataService } from '../shared-data.component';
import { StudentSignupComponent } from '../student-signup/student-signup.component';
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule,NgIf,StudentLoginComponent,StudentSignupComponent,RouterModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  rollNo:number;//we have input decorator on the roll no property
  email:String="";
  password:String="";
  check:boolean=false;
  student1:any=[];
  // student={
  //   rollNo:27000,
  //   name:"",
  //   dept:"",
  //   email:"",
  //   password:"",
  //   cPassword:""
    

  //  };

   constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute,private shared: SharedDataService)
   {
      
   }




  //  private sharedObjectSource = new BehaviorSubject<any>(null);
  // sharedObject$ = this.sharedObjectSource.asObservable();

  // updateSharedObject(data: any) {
  //   console.log(this.sharedObject$);
  //   this.sharedObjectSource.next(data);
  //   console.log(this.sharedObject$);
    // console.log(data);
  // }



  //  studentName:String="";
  //  sendData(name1:String)
  //     {
  //       this.studentName=name1;
  //       console.log(this.studentName);
  //     }
  //  private message=new BehaviorSubject(this.rollNo);
  //     getMessage=this.message.asObservable();
      
         
       
        // setMessage(message:number)
        // {
        //     this.message.next(message);
        //     console.log(this.message);
        // }
   studentLogin() {
    // console.log(this.rollNo);
    this.http.get(`http://localhost:8083/studentLogin/${this.rollNo}`).subscribe(
      (data)=>{
        // if any changes in input it will call automatic
        // var js= JSON.parse
        this.student1=data;
        // console.log(this.student1);
        // console.log(this.student1.dept);
        // console.log(js.rollNo);

        // let user = { name: "Raja", age: 20, email: "raja@mail.com" };
  // let navigationExtras: NavigationExtras = {
  //   state: {
  //     user: user,
  //   },
  // };
        // user:String=;
        if(data==null)
        {
          alert("Invalid credentials!");
        }
        else if(this.password===this.student1.password && this.email===this.student1.email)
        {
        //  this.sendData(this.student1.name);
        const myObject=this.student1;
        this.shared.updateSharedObject(myObject);
          this.router.navigate(['studentDashboard',{data:this.student1.name}]);
        }
        else if(this.password!=this.student1.password || this.email!=this.student1.email){
          // this.check=true;
          alert("please check email and password again!");
        }
        
      },
      (error)=>{
        console.log(error);
      }
      
      
      
    )
      }
      
      // message:String="";
      
      
     
      // a:any=this.studentLogin()


      
      
      

      
  

}
