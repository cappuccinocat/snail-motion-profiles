import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Waypoint } from './waypoint';

@Injectable()
export class WaypointsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private waypointsUrl = 'api/waypoints';  // URL to web api

  constructor(private http: Http) { }

  getWaypoints(): Waypoint[] {
    var result;
    this.http.get(this.waypointsUrl).subscribe(data => {
      // Read the result field from the JSON response.
      result = data.json().data as Waypoint[]
    });
    return result;
  }

  update(waypointArr){
    this.http
      .put(this.waypointsUrl, JSON.stringify(waypointArr), {headers: this.headers});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
