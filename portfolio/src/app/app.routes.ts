import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'resume', component:ResumeComponent},
    {path:'contact', component:ContactComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'**', component:HomeComponent, pathMatch:'full'}
];
