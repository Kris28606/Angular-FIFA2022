import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllGroupsComponent } from './groups/all-groups/all-groups.component';
import { MainComponent } from './main/main.component';
import { AllMatchesComponent } from './matches/all-matches/all-matches.component';
import { AllTeamsComponent } from './teams/all-teams/all-teams.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full' ,
  },
  {
    path:'home', component: MainComponent
  },
  {
    path: 'teams', component: AllTeamsComponent
  },
  {
    path: 'groups', component: AllGroupsComponent
  },
  {
    path: 'matches', component: AllMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
