import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleItemComponent } from './single-item/single-item.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: ListComponent },
            { path: 'single/:id', component: SingleItemComponent },
        ]
    },
];

@NgModule({

    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

