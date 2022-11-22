import { Injectable } from '@angular/core';
import { ICard } from '../interfaces/main.interface';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
  }
  products: ICard[] = require('./products.json')



}


