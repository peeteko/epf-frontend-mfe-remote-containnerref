import { Injectable } from '@angular/core';
import { Connection, ConnectionState, PlatformTypes } from '../plugins-models/plugins.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor(private readonly httpClient: HttpClient) { }

  public getConnectionsList(jwtTokenValue : string): Observable<Connection[]> {
    const authorizationValue = "Bearer ".concat(jwtTokenValue);
    return this.httpClient.get<Connection[]>(`${environment.endPointEpfAdapter}/connections`, { headers : this._getHeaders(authorizationValue)});   
  }

  private _getHeaders(authorizationValue : string) : HttpHeaders{
    return new HttpHeaders({
      
      'Authorization' : authorizationValue,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    });
  }
 

}
