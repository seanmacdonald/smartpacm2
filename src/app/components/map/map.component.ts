import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule, AngularFireObject } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable'; 
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore'
import { AngularFireModule,  } from 'angularfire2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  location: AngularFireList<any>; 
  locationObservable: Observable<any[]>;
  seanString: string[];
  //sean$: FirebaseListObservable<any[]>;  
  //latitude:number; 
  //longitude:number;
  latitude = 51.678418; 
  longitude = 7.809007; 

  constructor(private db: AngularFireDatabase){
    this.location = db.list('location');
    console.log("sean");
    var items = this.location.valueChanges()
      .map(items => {
      console.log(items);
      return items;
    })  
    console.log("sean"); 
  }


  /*constructor(db: AngularFireDatabase) {
      db.list('/location')
        .subscribe(location => {
          this.location = location; 
          console.log(this.location); 
        });
    }*/

  ngOnInit() {
    //this.latitude = 49.243420;
    //this.longitude = -123.171805; 
    var x  = this.FindSmartPac();
    x.snapshotChanges().subscribe(item => {
      this.seanString = []; 
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key; 
        this.seanString.push(y as string);
      });
    });
    console.log(this.seanString); 
    console.log("ngOnInit done"); 
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  

  FindSmartPac(){
    console.log("Found your smartpac");
    this.location = this.db.list('location');
    return this.location; 
    //this.latitude = 49.261643; 
    //this.longitude = -123.249289;  

    //TODO: figure out how to hide map  
    //var map = <HTMLA> document.getElementsByClassName("map"); 
    //map.style = "visible"; 
  }

  LockUnlockSmartPac(){
    console.log("locked or unlocked your smartpac"); 
  }
}
