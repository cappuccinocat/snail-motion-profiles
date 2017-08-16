import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'paths', loadChildren: './paths/paths.module#PathsModule' },
            { path: 'create', loadChildren: './form/form.module#FormModule' },
            { path: 'settings', loadChildren: './grid/grid.module#GridModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
