import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { ListComponent } from './list/list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { SortingPipe } from '../../services/sorting.pipe';
import { FormsModule } from '@angular/forms';
import { SingleItemComponent } from './single-item/single-item.component';



@NgModule({
  entryComponents: [
    ListComponent,
  ],
  declarations: [
    ListComponent, SortingPipe, SingleItemComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
