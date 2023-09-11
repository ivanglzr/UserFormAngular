import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

interface userRes {
  status: string;
  user: User;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  public name: string;
  public id: string;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this.name = '';
    this.id = '';
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];

      this._userService.getUser(this.id).subscribe({
        next: (v) => {
          console.log(v);
          this.name = v.user.name;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => console.log('complete'),
      });
    });
  }

  deleteUser() {
    this._userService.deleteUser(this.id).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('complete'),
    });
  }
}
