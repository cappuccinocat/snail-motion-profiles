import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { PageHeaderModule } from './../../shared';
import { CanvasComponent } from './canvas.component';

@NgModule({
    imports: [
        CommonModule,
        CreateRoutingModule,
        PageHeaderModule
    ],
    declarations: [CreateComponent, CanvasComponent ]
})
export class CreateModule { }
