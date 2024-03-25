import { Observable } from "rxjs";
import { ClientList } from "../models/client";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { RestReponse } from "../models/rest.response";

export abstract class AbstractCommandeService {
   protected apiUrl():string{
       return  `${environment.apiUrl}/commandes`
   }
    abstract findAll(page:number): Observable<RestReponse<ClientList[]>>;
}