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


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapButtonsComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBEqBMOFhw5D_MCW7ej5-0wLmSYVJkNbmU'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
