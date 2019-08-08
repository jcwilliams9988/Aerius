import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Category1Component } from './category1/category1.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Category2Component } from './category2/category2.component';
import { ApplyComponent } from './apply/apply.component';
import { ServicesComponent } from './services/services.component';
import { StaffComponent } from './staff/staff.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:  HomeComponent },
    { path: 'about', component:  AboutComponent },
    { path: 'staff', component:  StaffComponent},
    { path: 'testimonials', component:  TestimonialsComponent },
    { path: 'contact', component:  ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
