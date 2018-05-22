import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MasterDetailBodyComponent } from './master-detail-body/master-detail-body.component';
import { AlternativeMasterComponent } from './alternative-master/alternative-master.component';
import { AlternativeDetailComponent } from './alternative-detail/alternative-detail.component';
import { DefaultMasterComponent } from './default-master/default-master.component';
import { DefaultDetailComponent } from './default-detail/default-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLayoutComponent,
    NavigationComponent,
    MasterDetailBodyComponent,
    AlternativeMasterComponent,
    AlternativeDetailComponent,
    DefaultMasterComponent,
    DefaultDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
