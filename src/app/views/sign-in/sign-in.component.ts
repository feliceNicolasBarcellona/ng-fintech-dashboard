import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  hide: boolean = true;

  onSignIn(signin: NgForm) {
    if (signin.valid) {
      console.log(signin.value);
    } else {
      console.log('invalid');
    }
  }
}
