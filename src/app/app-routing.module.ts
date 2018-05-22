import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormDataComponent } from './form-data/form-data.component';
import { RegisterComponent } from './register/register.component';
import { EditFormComponent } from './edit-form/edit-form.component';


const routes: Routes = [
  {
    path:'form',
    component:FormDataComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'register/:id',
    component:EditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
