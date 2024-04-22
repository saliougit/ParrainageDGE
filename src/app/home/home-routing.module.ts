import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ParrainageComponent } from './parrainage/parrainage.component';
import { CandidatComponent } from './candidat/candidat.component';
import { ElecteurComponent } from './electeur/electeur.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children : [
      {
        path: 'electeur',
        title : 'Electeurs',
        component: ElecteurComponent
      },
      {
        path: 'candidat',
        title : 'Candidats',
        component: CandidatComponent
      },
      {
        path: '**',
        redirectTo: 'electeur'
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
