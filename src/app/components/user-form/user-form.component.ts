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

  constructor(public _userService: UserService) {
    this.userData = {
      name: '',
      email: '',
      password: '',
    };
  }

  sendData() {
    // Se llama al servicio y se suscribe al observable pasandole como parametros las funciones correspondientes
    this._userService.register(this.userData).subscribe({
      next: (v) => {
        console.log(v);
        Swal.fire('Enviado', 'Formulario enviado correctamente', 'success');
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
