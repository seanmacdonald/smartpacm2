import { Component, OnInit } from '@angular/core';

import { MapButtonsService } from '../shared/map-buttons.service';
import { MapButtons } from '../shared/map-buttons.model'; 
@Component({
  selector: 'app-map-buttons',
  templateUrl: './map-buttons.component.html',
  styleUrls: ['./map-buttons.component.css']
})
export class MapButtonsComponent implements OnInit {

  dataList : MapButtons[]; 
  constructor(private mapButtonsService : MapButtonsService) { }

  ngOnInit() {
    var x = this.mapButtonsService.getData(); 
    x.snapshotChanges().subscribe(item => { //note that the arrow function will be invoked whenever you change the data from firebase 
      this.dataList = [];
      item.forEach(element => {
        var y = element.payload.toJSON(); 
        y["$key"] = element.key;
        this.dataList.push(y as MapButtons);  
      });
    });
    console.log("sean"); 
    console.log(x); 
    console.log("sean"); 
  }

  //NOTE: There is not parameter for this method because it is not a submit button 
  //this method should just make use of the getData method 
  FindSmartPac(){
    console.log("Show SmartPac on the map"); 
  }

  //This method should make use of the updateData method 
  LockUnlockSmartPac(){
    console.log("Lock/Unlock SmartPac"); 
  }

}
