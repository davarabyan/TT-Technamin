import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/main.interface';
import { MainService } from 'src/app/services/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mainService: MainService, private title: Title) { }
  item: ICard = {} as any

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'yourDefaultString';
    this.item = this.mainService.products.filter(x => x.id === +id)[0]
    this.title.setTitle(this.item.title);


  }




}
