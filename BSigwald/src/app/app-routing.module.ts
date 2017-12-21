import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { AppComponent } from './app.component';
import { SophrologieComponent } from './pages/sophrologie/sophrologie.component';
import { MainComponent } from './main/main.component';
import { CoherenceComponent} from './pages/coherence/coherence.component';
import { ApplicationsComponent} from './pages/applications/applications.component'; 

const routes: Routes = [
  { path: 'parcours', component: ParcoursComponent},
  { path: 'sophrologie', component: SophrologieComponent},
  { path: 'applications', component: ApplicationsComponent},
  { path: 'accueil', component: MainComponent},
  { path: 'coherence', component: CoherenceComponent},
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
