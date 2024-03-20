import { Injectable } from '@angular/core';
import { AbstractClientService } from '../AbstractClientService';
import { Observable } from 'rxjs';
import { ClientList } from '../../models/client';
import { HttpClient } from '@angular/common/http';
import { RestReponse } from '../../models/rest.response';

@Injectable({
  providedIn: 'root'
})
export class ClientRestService  extends AbstractClientService{
  constructor(private http:HttpClient){
       super();
  }
  override findAll(page:number=0,keyword:string=""): Observable<RestReponse<ClientList[]>> {
    return  this.http.get<RestReponse<ClientList[]>>(`${this.apiUrl()}?page=${page}&keyword=${keyword}`);
  }
  
}
