import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router, private title: Title) {

  }
  profileForm: any
  showToaster: boolean = false
  ngOnInit(): void {
    this.title.setTitle('Login');
    if (this.loginService.loggedIn()) { this.router.navigateByUrl('/home') }
    this.profileForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  logIn() {
    if (!this.profileForm.valid) return
    this.loginService.logIn(this.profileForm.value).then(token => {
      localStorage.setItem('access_token_tt', token)
      this.router.navigateByUrl('/home')
    }).catch(x => {
      this.openModal()
    })
  }

  openModal() {
    this.showToaster = true
    setTimeout(() => {
      this.showToaster = false
    }, 3000);
  }

}
