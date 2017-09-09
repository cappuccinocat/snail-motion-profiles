import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Settings } from './setting';

@Injectable()
export class SettingsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private settingsUrl = 'data/settings.json';  // URL to web api

  constructor(private http: Http) { }

  getSettings(): Settings{
    var result;
    this.http.get(this.settingsUrl).subscribe(data => {
      // Read the result field from the JSON response.
      result = data.json().data as Settings
    });
    return result;
  }

  update(newSettings) {
    this.http
      .put(this.settingsUrl, JSON.stringify(newSettings), {headers: this.headers});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
