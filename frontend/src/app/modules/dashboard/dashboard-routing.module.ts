import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MembersComponent } from './pages/members/members.component';
import { UsersComponent } from './pages/users/users.component';
import { CommittesComponent } from './pages/committes/committes.component';
import { ConstantsComponent } from './pages/constants/constants.component';
import { CommitteMembersComponent } from './pages/committe-members/committe-members.component';
import { JobsComponent } from './pages/jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'constants', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'commites', component: CommittesComponent },
      { path: 'constants', component: ConstantsComponent },
      { path: 'committeMembers', component: CommitteMembersComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'members', component: MembersComponent },
      // { path: '', loadComponent: () => import('./standalone.component').then(m => m.StandaloneComponent) },

      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
