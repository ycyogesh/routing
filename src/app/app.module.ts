import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
// import { UserComponent } from './newModule/user/user.component';
// import { NewModuleuserComponent } from './new-moduleuser/new-moduleuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    ComponeComponent,
    ComptwoComponent,
    PagenotfoundComponent,
    HomeComponent,
    UserdetailsComponent,
    // UserComponent,
    // NewModuleuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
