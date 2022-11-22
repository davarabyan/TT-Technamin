import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/main.interface'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loggedIn() {
    return localStorage.getItem("access_token")
  }

  logIn(credentials: ILogin) {
    return new Promise<string>((resolve, reject) => {

      if (credentials.userName === 'admin' && credentials.password === 'password') {
        resolve('sfdfdf6as98d6f7a98s6df97as6f789asd6g98sad5g9as58d798g5a9sd7g9gasf')
      } else {
        reject("Unauthorized")
      }

    });
  }


}
