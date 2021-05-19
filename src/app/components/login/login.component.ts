import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  gbValidate: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginModel = new LoginModel('', '');

  /**
   * Metodo de logueo
   */
  onSubmit() {
    this.gbValidate = this.loginModel.validateData();
    console.log('result onSubmit() -> ' + this.gbValidate);
    if (this.gbValidate) {
      console.log('route');
      this.router.navigateByUrl('/dashboard');
    }
  }
}
