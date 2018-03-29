import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { environment } from '../environments/environment';
import { MapButtonsComponent } from './components/map/map-buttons/map-buttons.component';
import { MapViewComponent } from './components/map/map-view/map-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent 
  },
  {
    path: 'map',
    component: MapComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapButtonsComponent,
    MapViewComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBEqBMOFhw5D_MCW7ej5-0wLmSYVJkNbmU'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
