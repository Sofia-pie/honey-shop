import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: new FormControl(
        [''],
        [Validators.required, Validators.minLength(3)]
      ),
      email: new FormControl([''], [Validators.required, Validators.email]),
      password: new FormControl([''], [Validators.required]),
      phone: new FormControl(
        [''],
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(/^[+]?[0-9]+$/),
        ]
      ),
    });
  }

  ngOnInit(): void {}
  registerUser() {
    this.authService.register(this.signupForm.value).subscribe((res) => {
      if (res) {
        this.signupForm.reset();
        this.router.navigate(['/log-in']);
      }
    });
  }
}
