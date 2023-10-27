import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hidePw: boolean = true;
  hideRepeatPw: boolean = true;

  onRegister(register: NgForm){
    if(register.valid){
      console.log(register.value);
    } else {
      console.log('invalid');
    }
  }
}
