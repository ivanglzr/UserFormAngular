import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  public errorTxt: string;

  constructor(private _userService: UserService, private _router: Router) {
    this.userData = {
      name: '',
      email: '',
      password: '',
    };
    this.errorTxt = '';
  }

  sendData() {
    const name = this.userData.name;
    const email = this.userData.email;
    const password = this.userData.password;

    if (name.length < 3 || name == undefined)
      return (this.errorTxt = 'El nombre es demasiado corto');
    if (
      email.length < 5 ||
      email == undefined ||
      !email.includes('@') ||
      !email.includes('.')
    )
      return (this.errorTxt = 'El email no es valido');
    if (password.length < 8 || password == undefined)
      return (this.errorTxt = 'La contraseña es demasiado corta');

    // Se llama al servicio y se suscribe al observable pasandole como parametros las funciones correspondientes
    return this._userService.register(this.userData).subscribe({
      next: (v) => {
        console.log(v);
        Swal.fire('Enviado', 'Formulario enviado correctamente', 'success');
        this._router.navigate(['/login']);
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
