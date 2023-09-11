import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  public userData: User;
  public id: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.userData = {
      name: '',
      email: '',
      password: '',
    };
    this.id = '';
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = params['id'];

      this._userService.getUser(this.id).subscribe({
        next: (v: any) => {
          console.log(v);
          this.userData = v.user;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => console.log('complete'),
      });
    });
  }

  sendData() {
    // Se llama al servicio y se suscribe al observable pasandole como parametros las funciones correspondientes
    this._userService.updateUser(this.id, this.userData).subscribe({
      next: (v) => {
        console.log(v);
        Swal.fire(
          'Usuario Editado',
          'El usuario fue editado correctamente',
          'success'
        );
        this._router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('complete'),
    });
  }
}
