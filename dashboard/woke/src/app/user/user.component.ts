import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<any>;
  count: number;


  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe( data => {
      this.users = data.results;
      this.count = data.count;
    });
  }

  deleteUser(id: number): void{
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción no es reversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {
        this.api.deleteUserDetail(id).subscribe( data => {
          const removeIndex = this.users.map(item => item.id).indexOf(id);
          this.users.splice(removeIndex, 1);
          Swal.fire(
            '¡Usuario Eliminado!',
            'El usuario ha sido eliminado',
            'success'
          );
        }, error => {
          Swal.fire(
            '¡Hubo un problema!',
            error.error.detail,
            'error'
          );
        });
      }
    });
  }

  newUser(): void{
    this.router.navigate(['/user-detail']);
  }
}
