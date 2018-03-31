import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule, AngularFireObject } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore'
import { AngularFireModule,  } from 'angularfire2';

import { MapButtonsService } from './shared/map-buttons.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [MapButtonsService]
})
export class MapComponent implements OnInit {


  constructor(private mapButtonsService : MapButtonsService, private router:Router){
    
  }


  ngOnInit() {
  }

  logoutButtonClick(){
    this.router.navigate(['']);
  }



}
