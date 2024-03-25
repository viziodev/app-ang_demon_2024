import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit {
   constructor(private route: ActivatedRoute){

   }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

}
