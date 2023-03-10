import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '' , component:DahsboardComponent},
  {path: 'dashboard' , component:DahsboardComponent},
  {path: 'user' , component:UserComponent},
  {path: 'user/:id' , component:UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
