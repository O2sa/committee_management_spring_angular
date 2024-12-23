import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private authService: AuthService,
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['demo', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { username, password } = this.form.value;

    // stop here if form is invalid
    // if (this.form.invalid) {
    //   return;
    // }
    this.authService.login(this.form.value).subscribe({
      next: (data: { token: string }) => {
        console.log(data);
        // this.totalRecords = products.total;
        this.authService.storeToken(data.token);
        this._router.navigate(['/']);

      },
      error: (error) => {
        // this.handleRequestError(error);
        console.log('Error caught by the method');
        console.log('Error status:', error.status);
        console.log('Error response:', error);
      },
    });
  }
}
