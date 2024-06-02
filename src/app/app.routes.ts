import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MainComponent } from './main/main.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import {  RouterModule } from "@angular/router";
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StudentUpdateResComponent } from './student-update-res/student-update-res.component';
import { AddEventComponent } from './add-event/add-event.component';
import { StudentResViewComponent } from './student-res-view/student-res-view.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
         pathMatch: 'full'
    },
    {
        path:"studentSignup", 
        component:StudentSignupComponent,
        // redirectTo:"/studentSignup",
        pathMatch:'full'
        
    },
    {
        path:"studentLogin", 
        component:StudentLoginComponent,
        // redirectTo:"/studentSignup",
        pathMatch:'full'
        
    },
    {
        path:"studentDashboard", 
        component:StudentDashboardComponent,
        // redirectTo:"/studentSignup",
        pathMatch:'full',
        // canActivate:[authguard],
        // data: { shoulddetach: true}
    },
    {
        path:"studentProfile", 
        component:StudentProfileComponent,
        pathMatch:'full'
    },
    {
        path:"studentUpdate", 
        component:StudentUpdateComponent,
        pathMatch:'full'
    },
    {
        path:"teacherSignup", 
        component:TeacherSignupComponent,
        pathMatch:'full'
    },
    {
        path:"teacherLogin", 
        component:TeacherLoginComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"teacherDashboard", 
        component:TeacherDashboardComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"viewStudent", 
        component:ViewStudentComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"studentUpdateResAtt", 
        component:StudentUpdateResComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"manageEvents", 
        component:AddEventComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"studentViewRes", 
        component:StudentResViewComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"viewEvents", 
        component:ViewEventComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"about", 
        component:AboutComponent,
        
        pathMatch:'full'
        
    },
    {
        path:"contact", 
        component:ContactComponent,
        
        pathMatch:'full'
        
    },
    

];
