import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        CreateRoutingModule,
        PageHeaderModule
    ],
    declarations: [CreateComponent]
})
export class CreateModule { }
