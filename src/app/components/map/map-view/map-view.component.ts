import { Component, OnInit } from '@angular/core';

import { MapButtonsService } from '../shared/map-buttons.service';
import { MapButtons } from '../shared/map-buttons.model'; 
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  dataList : MapButtons[]; 
  data: any; 
  //latitude = 49.260933; 
  //longitude = -123.240849; 
  latitude = 49.675403;
  longitude = -112.780730; 
  constructor(private mapButtonsService : MapButtonsService) { }

  ngOnInit() {
    var x = this.mapButtonsService.getData(); 
    x.snapshotChanges().subscribe(item => { //note that the arrow function will be invoked whenever you change the data from firebase 
      this.dataList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.data = y;
        console.log(this.data);  
        y["$key"] = element.key;
        this.dataList.push(y as MapButtons);  
        console.log(this.dataList); 
      });
    });
    console.log("sean"); 
    //console.log(this.dataList[0].lat); 
    console.log(this.data); //TODO: figure out some sort of promise to get the data properlly 
    console.log("sean"); 
  }

}
