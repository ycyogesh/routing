import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    NewModuleRoutingModule
  ]
})
export class NewModuleModule { }
