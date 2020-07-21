import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


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
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }


  onSubmit(): void{
    console.log("submitins")
    console.log(this.loginForm.value);
    this.api.login(this.loginForm.value).subscribe( data => {
      localStorage.setItem('user', JSON.stringify( data ));
    }, error => {
      window.alert("Credenciales incorrectas, por favor prueba de nuevo");
    })
  }

}
