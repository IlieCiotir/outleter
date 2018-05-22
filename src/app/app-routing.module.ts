import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MasterDetailBodyComponent } from './master-detail-body/master-detail-body.component';
import { DefaultMasterComponent } from './default-master/default-master.component';
import { DefaultDetailComponent } from './default-detail/default-detail.component';
import { AlternativeMasterComponent } from './alternative-master/alternative-master.component';
import { AlternativeDetailComponent } from './alternative-detail/alternative-detail.component';

const routes: Routes = [
  {
    path: 'layout',
    component: NavLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        outlet: 'nav',
        component: NavigationComponent
      },
      {
        path: '',
        pathMatch: 'full',
        outlet: 'body',
        component: MasterDetailBodyComponent,
        children: [
          {
            path: '',
            outlet: 'master',
            pathMatch: 'full',
            component: DefaultMasterComponent
          },
          {
            path: '',
            outlet: 'detail',
            pathMatch: 'full',
            component: DefaultDetailComponent
          },
          {
            path: 'alt',
            outlet: 'master',
            component: AlternativeMasterComponent
          },
          {
            path: 'alt',
            outlet: 'detail',
            component: AlternativeDetailComponent
          }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
