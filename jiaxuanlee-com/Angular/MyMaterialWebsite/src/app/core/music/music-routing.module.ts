import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LatestComponent} from './latest/latest.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
    {
        path: 'music', children: [
            { 
                path:'',
                redirectTo:'latest',
                pathMatch:'full'
            },
            { 
                path:'latest',
                component: LatestComponent 
            },
            { 
                path:'top',
                component: TopComponent 
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MusicRoutingModule { }
