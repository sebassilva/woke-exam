import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      username: ['', Validators.required ],
      password: ['', Validators.minLength(8) ],
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const id = params.id;
      this.api.getUserDetail(id)
        .subscribe( data => {
          this.userForm.patchValue(data);
        })
    });
  }


  onSubmit(): void{
    if ( !this.userForm.valid ){
      console.log(this.userForm.errors)
      return;
    }
    this.api.postUserDetail(this.userForm.value).subscribe( data => {
      if ( data ){
        // If login is correct, navigate to users
        Swal.fire(
          '¡Usuario creado!',
          'Regresaremos a la lista de usuarios..',
          'success'
        );
        this.router.navigate(['/user']);
      }
    }, error => {
      console.log(error)
      Swal.fire(
        '¡Hubo un problema!',
        error.error.detail,
        'error'
      );
   });
  }
}
