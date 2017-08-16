import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathsComponent } from './paths.component';
import { PathsRoutingModule } from './paths-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        PathsRoutingModule,
        PageHeaderModule
    ],
    declarations: [PathsComponent]
})
export class PathsModule { }
