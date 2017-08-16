import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Settings }        from './setting';
import { SettingsService } from './settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    animations: [routerTransition()],
    providers: [SettingsService]
})

export class SettingsComponent implements OnInit {
    constructor(
      private settingsService: SettingsService
    ){}

    ngOnInit() { }

    onSave() {
    }
}
