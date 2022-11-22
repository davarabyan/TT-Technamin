import { Component, OnInit } from '@angular/core';
import { IFilter } from 'src/app/interfaces/main.interface';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private mainService: MainService) { }

  products = this.mainService.products

  pagination = { skip: 1, take: 8 }

  sortingArg: IFilter = {
    filterBy: '',
    sortDir: "asc",
    sortBy: ''
  }

  ngOnInit(): void {
    this.products = this.mainService.products.slice(0, 8)
  }


  scroll() {
    this.products = [...this.products, ...this.mainService.products.slice(this.pagination.skip * this.pagination.take, this.pagination.skip * this.pagination.take + 8)]
    this.pagination.skip++
  }
}
