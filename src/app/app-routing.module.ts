import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '' , component:DahsboardComponent},
  {path: 'dashboard' , component:DahsboardComponent},
  {path: 'user' , component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
