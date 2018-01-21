import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/utils/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo:"index",pathMatch:"full" },
    { path: 'index', loadChildren:'app/core/index/index.module#IndexModule' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
