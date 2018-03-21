import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; 



import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBEqBMOFhw5D_MCW7ej5-0wLmSYVJkNbmU'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
