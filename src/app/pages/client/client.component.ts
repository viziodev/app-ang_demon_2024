import { Component, OnInit } from '@angular/core';
import { RestReponse } from '../../core/models/rest.response';
import { ClientList } from '../../core/models/client';
import { ClientRestService } from '../../core/services/impl/client.rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  reponse: RestReponse<ClientList[]>|null=null
  constructor(private clientService:ClientRestService){
  }
  ngOnInit(): void {
       this.refresh()

  }
  refresh(page:number=0,keyword:string="") {
    this.clientService.findAll(page,keyword).subscribe((res: RestReponse<ClientList[]>) => {
      this.reponse=res;  
  })
  }
  paginate(page: number) {
    this.refresh(page);
  }
  searchTel(keyword:string){
    this.refresh(0,keyword);
  }


}
