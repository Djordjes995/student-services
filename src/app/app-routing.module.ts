import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExamDetailsComponent} from './exam-details/exam-details.component';
import {LoginComponent} from './login/login.component';
import {StudLandingComponent} from './stud-landing/stud-landing.component';
import {ExamsComponent} from './exams/exams.component';


const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'exam-details', component: ExamDetailsComponent},
    {path: 'stud-landing', component: StudLandingComponent},
    {path: 'exams', component: ExamsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
