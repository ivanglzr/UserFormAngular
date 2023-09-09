import { Component } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  public userData: User;
  public send: boolean;

  constructor(public _userService: UserService) {
    this.userData = {
      name: '',
      email: '',
      password: '',
    };
    this.send = false;
  }

  sendData() {
    if (!this.send) {
      console.log(this.userData);
      this._userService.save(this.userData).subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      );
      Swal.fire('Enviado', 'Formulario enviado correctamente', 'success');
      this.send = true;
    } else {
      console.log('Ya enviaste el formulario');
    }
  }
}
