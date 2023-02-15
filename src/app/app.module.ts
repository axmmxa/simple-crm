import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { UserComponent } from './user/user.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DahsboardComponent,
    UserComponent,
    DialogAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
