import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { PhotoGallaryComponent } from './photo-gallery/photo-gallary.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterformComponent } from './registerform/registerform.component';
import { RESTUsersComponent } from './rest-users/rest-users.component';
import { UserService } from './user.service'; 
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AngularComponent } from './angular/angular.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { AzurecloudComponent } from './azurecloud/azurecloud.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    AllCoursesComponent,
    PhotoGallaryComponent,
    ContactusComponent,
    RegisterformComponent,
    RESTUsersComponent,
    DropdownComponent,
    AngularComponent,
    DotnetcoreComponent,
    AzurecloudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
