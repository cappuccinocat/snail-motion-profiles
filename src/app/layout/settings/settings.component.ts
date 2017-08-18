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
    settings: Settings = {
      accel:0.0,
      jerk:0.0,
      vel:0.0,
      width:0.0
    };
    constructor(
      private settingsService: SettingsService
    ){}

    ngOnInit(): void {
      //this.settingsService.getSettings().then(setting => this.settings = setting);
    }

    onSave() {
      this.settingsService.update(this.settings)
    }
}
