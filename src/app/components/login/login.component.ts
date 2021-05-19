import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  gbValidate: boolean = false;
  public loginForm!: FormGroup;

  constructor(private router: Router) {
    this.loginForm = this.createForm();
  }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  /**
   * Metodo que valida la respuesta del formulario reactivo y redirige al dashboard
   */
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Data Valida');
      this.router.navigateByUrl('/dashboard');
    } else {
      console.log('Data Invalid');
    }
  }

  /**
   * Metodo que borra data en los input
   */
  onResetForm(): void {
    this.loginForm.reset();
  }
}
