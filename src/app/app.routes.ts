import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { CommandeComponent } from './pages/commande/commande.component';

export const routes: Routes = [
      {
        path: '',
        component: ClientComponent
      },
      {
        path: 'commande',
        component: CommandeComponent
      }
];
