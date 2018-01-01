import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { LastNewsComponent } from './last-news/last-news.component';

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'test', component: LastNewsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRoutingModule {}
