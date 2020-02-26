import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentGetComponent } from './student-get/student-get.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';  

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentGetComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
   // ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
