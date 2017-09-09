import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Waypoint } from './waypoint';

@Injectable()
export class WaypointsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private waypointsUrl = 'api/waypoints';  // URL to web api

  constructor(private http: Http) { }

  getWaypoints(): Promise<Waypoint[]> {
    return this.http.get(this.waypointsUrl)
               .toPromise()
               .then(response => response.json().data as Waypoint[])
               .catch(this.handleError);
  }

  update(waypointArr): Promise<Waypoint[]> {
    return this.http
      .put(this.waypointsUrl, JSON.stringify(waypointArr), {headers: this.headers})
      .toPromise()
      .then(() => waypointArr)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
