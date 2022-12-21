import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types/types';
import { NewsLetterService } from '../../services/news-letter.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // user: User = {
  //   firstName: 'Alice',
  //   lastName: 'Smith'
  // };

  constructor(
    private newsletterService: NewsLetterService,
    public userService: UserService,
    ) {

  }

  subscribe(email: any) {
    this.newsletterService.subscribe(email);
  }

  changeUserName() {
    // this.user.firstName = 'Bob'; // works on Default CDS
    // this.user = {
    //   firstName: 'Bob',
    //   lastName: 'Smith'
    // }; // works on Push CDS

    this.userService.loadUser({firstName: 'Bob', lastName: 'Smith' });
  }
}
