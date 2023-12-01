import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { PhotoGallaryComponent } from "./photo-gallery/photo-gallary.component";
import { RegisterformComponent } from "./registerform/registerform.component";
import { RESTUsersComponent } from "./rest-users/rest-users.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { AngularComponent } from "./angular/angular.component";
import { DotnetcoreComponent } from "./dotnetcore/dotnetcore.component";
import { AzurecloudComponent } from "./azurecloud/azurecloud.component";

export const router: Routes = [
    { path: "", redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'all-courses',component: AllCoursesComponent},
    { path: 'contactus', component:ContactusComponent},
    { path: 'home', component:HomeComponent},
    { path: 'photo-gallery', component:PhotoGallaryComponent},
    {path: 'registerform',component:RegisterformComponent},
    {path: 'rest-users',component:RESTUsersComponent},
    {path:'dropdown',component:DropdownComponent},
    {path:'angular',component:AngularComponent},
    {path:'dotnetcore',component:DotnetcoreComponent},
    {path:'azurecloud',component:AzurecloudComponent}
];
 
export const routes = RouterModule.forRoot(router);