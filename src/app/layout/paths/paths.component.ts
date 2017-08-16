import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-paths',
    templateUrl: './paths.component.html',
    styleUrls: ['./paths.component.scss'],
    animations: [routerTransition()]
})
export class PathsComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
