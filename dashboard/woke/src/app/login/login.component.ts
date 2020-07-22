import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.api.login(this.loginForm.value).subscribe( data => {
      localStorage.setItem('user', JSON.stringify( data ));
      if (data.access){
        // If login is correct, navigate to users
        this.router.navigate(['/user']);
      }
    }, error => {
      Swal.fire(
        '¡Hubo un problema!',
        'Por favor verifica usuario y contraseña.',
        'error'
      );
   });
  }

}
