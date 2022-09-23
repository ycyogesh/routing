import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
    // redirectTo : "path"  pathMatch : "full" -------> This is Another way of redirecting
  },
  {
    path: "aboutus",
    component: AboutusComponent,
    children: [
      {
        path: ":id",
        component: UserdetailsComponent
      }
    ]
  },
  {
    path: "contactus",
    component: ContactusComponent,
    children: [
      {
        path: "compone",
        component: ComponeComponent
      },
      {
        path: ":variable",   //comptwo    // :variableName  -------> wildcard routing
        component: ComptwoComponent
      }
    ]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
