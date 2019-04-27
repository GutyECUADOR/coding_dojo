import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewSalaComponent } from './components/new-sala/new-sala.component';
import { InformesComponent } from './components/informes/informes.component';



const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'nuevaSala', component: NewSalaComponent },
    { path: 'informes', component: InformesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const appRouting = RouterModule.forRoot(routes);
