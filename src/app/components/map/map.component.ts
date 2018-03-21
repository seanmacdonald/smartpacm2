import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //location: AngularFireList<any>; 
  //latitude:number; 
  //longitude:number;
  latitude = 51.678418; 
  longitude = 7.809007; 

  /*constructor(db: AngularFireDatabase){
    this.location = db.list('/location');
    console.log("sean");
    console.log(this.location);  
    console.log("sean"); 
  }*/

  constructor(){
    
  }


  /*constructor(db: AngularFireDatabase) {
      db.list('/location')
        .subscribe(location => {
          this.location = location; 
          console.log(this.location); 
        });
    }*/

  ngOnInit() {
    this.latitude = 49.243420;
    this.longitude = -123.171805; 
    console.log("ngOnInit done"); 
  }
  

  FindSmartPac(){
    console.log("Found your smartpac");
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
