import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'paths', loadChildren: './paths/paths.module#PathsModule' },
            { path: 'create', loadChildren: './create/create.module#CreateModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
