import { Login } from './../interfaces/login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public loginForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm=this.loginGroup({user: '', password: ''});


  }

  redirect(){
    // console.log(this.loginForm.value.user);
    this.getRole();
    this.router.navigate(['/data-home']);
  }

  public getRole(){
    if (this.loginForm.value.password==='admin' && this.loginForm.value.user==='admin'){
      localStorage.setItem('role','admin');
    } else {
      localStorage.setItem('role','user');
    }
  }

  loginGroup(login: Login){
    return new FormGroup({
      user: new FormControl(login.user, Validators.required),
      password: new FormControl(login.password, Validators.required)
    });
  }
}
