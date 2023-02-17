import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit{
  user = new User()
  birthDate: Date;
  loading = false
  

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime()
    console.log("user:", this.user)
    this.loading = true

    this.firestore
      .collection("users")
      .add(this.user.toJSON())
      .then( (result: any) => {
        console.log("Adding User finished", result)
        this.loading = false
        this.dialogRef.close()
      })

  }
}
