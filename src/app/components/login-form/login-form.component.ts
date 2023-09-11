import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public userData: object | any;

  constructor(private _userService: UserService, private _router: Router) {
    this.userData = {
      email: '',
      password: '',
    };
  }

  sendData() {
    // Se llama al servicio y se suscribe al observable pasandole como parametros las funciones correspondientes
    this._userService
      .login(this.userData.email, this.userData.password)
      .subscribe({
        next: (v) => {
          console.log(v);
          Swal.fire(
            'Inicio de sesion completado',
            'Has iniciado sesion correctamente correctamente',
            'success'
          );
          this._router.navigate([`/user-page/${v.user._id}`]);
        },
        error: (e) => {
          console.error(e);

          let errMessage = 'Ha habido un problema';

          // Si el error trae un mensaje se muestra en la alerta
          if (e.error.message) errMessage = e.error.message;

          Swal.fire('Error', errMessage, 'error');
        },
        complete: () => console.info('complete'),
      });
  }
}
