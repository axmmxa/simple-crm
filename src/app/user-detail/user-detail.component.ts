import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId = ''
  user: User = new User;

  constructor(private route:ActivatedRoute, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');

      console.log("GOT ID", this.userId)

      this.getUser()

  })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe( (user:any) => {
      this.user = new User(user)
      
      console.log("retrieved user", this.user)
    })
  }

  openAddressDialog() {
    console.log("test")
  }

  editUserDetail() {
    console.log("test")
  }

}
