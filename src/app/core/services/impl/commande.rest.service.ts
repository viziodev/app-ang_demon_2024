import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientList } from '../../models/client';
import { HttpClient } from '@angular/common/http';
import { RestReponse } from '../../models/rest.response';
import { AbstractCommandeService } from '../AbstractCommandeService';

@Injectable({
  providedIn: 'root'
})
export class CommandeRestService  extends AbstractCommandeService{
  constructor(private http:HttpClient){
       super();
  }
  override findAll(page:number=0,keyword:string=""): Observable<RestReponse<ClientList[]>> {
    return  this.http.get<RestReponse<ClientList[]>>(`${this.apiUrl()}?page=${page}&keyword=${keyword}`);
  }
  
}
