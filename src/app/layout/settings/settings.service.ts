import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Settings } from './setting';

@Injectable()
export class SettingsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private settingsUrl = 'api/settings';  // URL to web api

  constructor(private http: Http) { }

  getSettings(): Promise<Settings[]> {
    return this.http.get(this.settingsUrl)
               .toPromise()
               .then(response => response.json().data as Settings)
               .catch(this.handleError);
  }

  update(newSettings): Promise<Settings> {
    return this.http
      .put(this.settingsUrl, JSON.stringify(newSettings), {headers: this.headers})
      .toPromise()
      .then(() => newSettings)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
