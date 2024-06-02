import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentSignupComponent } from '../student-signup/student-signup.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'AcademixConnect';
  constructor(private elementref:ElementRef){}
  ngOndestroy()
  {
    this.elementref.nativeElement.remove()
  }
  
}
