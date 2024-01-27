import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  formLogin : FormGroup = new FormGroup({} )
  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)
      ])
    })
  }
  sengLogin(){
    const {email, password} = this.formLogin.value;
    this.authService.sendCredentials(email, password)
  }
}
