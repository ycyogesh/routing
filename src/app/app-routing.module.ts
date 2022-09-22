import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
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
        path : "comptwo",
        component : ComptwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
