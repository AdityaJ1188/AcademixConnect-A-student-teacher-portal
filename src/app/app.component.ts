import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { StudentSignupComponent } from './student-signup/student-signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AcademixConnect';
  constructor(private elementref:ElementRef){}
  ngOndestroy()
  {
    this.elementref.nativeElement.remove()
  }
  // constructor(private router:Router){}

  // goToPage(pagename:string):void{

  // this.router.navigate([`${pagename}`])
  // }
}
