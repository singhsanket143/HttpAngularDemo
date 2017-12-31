import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://httpangulardemo-1cdf1.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://httpangulardemo-1cdf1.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    // return this.http.get('https://httpangulardemo-1cdf1.firebaseio.com/data.json');
    return this.http.get('https://httpangulardemo-1cdf1.firebaseio.com/data.json').map(
      (response: Response) => {
        const data = response.json();
        // console.log(data);
        return data;
      }
    );
  }

}
