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
    //console.log(this.dataList[0].lat); 
    console.log("sean"); 
  }

  //NOTE: There is not parameter for this method because it is not a submit button 
  FindSmartPac(dt : MapButtons){
    console.log("yoooo"); 
    //change the udpate value to 1 on the database
    this.mapButtonsService.selectedData = Object.assign({},dt); //this makes a copy of the dt object 
    this.mapButtonsService.selectedData.update = 0; 
    this.mapButtonsService.updateData(this.mapButtonsService.selectedData); 
  }


  LockUnlockSmartPac(dt : MapButtons){
    this.mapButtonsService.selectedData = Object.assign({},dt); //this makes a copy of the dt object 
    this.mapButtonsService.selectedData.locked = 0; 
    this.mapButtonsService.updateData(this.mapButtonsService.selectedData); 
  }

}
