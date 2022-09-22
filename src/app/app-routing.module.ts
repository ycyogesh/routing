import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "aboutus",
    component : AboutusComponent
  },
  {
    path : "contactus",
    component : ContactusComponent,
    children : [
      {
        path : "compone",
        component : ComponeComponent
      },
      {
        path : ":comptwo",       // :variableName  -------> wildcard routing
        component : ComptwoComponent
      }
    ]
  },
  {
    path : "**",
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
