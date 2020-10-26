import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * PasswordSymbolValidator
 */
function PasswordSymbolValidator(control) {
  if (control.hasError('required') || control.hasError('minlength'))
    return null;
  if (control.value.indexOf('@') === -1) return { symbol: true };
  else return null;
}

/**
 * password match validator
 */
function PasswordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value)
    confirmPassword.setErrors({ matchNotPassword: true });
  else confirmPassword.setErrors(null);

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.builder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            PasswordSymbolValidator,
            Validators.minLength(6)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: PasswordMatchValidator
      }
    );
  }

  register() {
    console.log(this.registerForm.value);
  }
}
