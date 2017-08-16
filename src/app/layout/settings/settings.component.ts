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
    settings: Settings;
    constructor(
      private settingsService: SettingsService
    ){}

    ngOnInit(): void {
      this.settingsService.getSettings().then(setting => this.settings = setting);
    }

    onSave() {
      this.settingsService.update(this.settings)
    }
}
