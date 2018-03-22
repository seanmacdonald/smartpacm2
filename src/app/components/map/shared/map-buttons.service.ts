import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MapButtons } from './map-buttons.model';
@Injectable()
export class MapButtonsService {
  dataList: AngularFireList<any>; //store collection of datas that we have stored in firebase (NOTE: I only have one data set stored for this project)
  selectedData: MapButtons = new MapButtons(); //store currently active data in this variable 

  constructor(private firebase : AngularFireDatabase ) {}

  //PUT ALL CRUD METHODS HERE!!!!
  getData(){
    this.dataList = this.firebase.list('location'); 
    return this.dataList; 
  }

  insertData(data : MapButtons){
    this.dataList.push({
      lat: data.lat,
      locked: data.locked,
      long: data.long
    });
  }

  updateData(data : MapButtons){
    this.dataList.update(data.$key,{
      lat: data.lat,
      locked: data.locked,
      long: data.long
    });
  }

  deleteData($key : string){
    this.dataList.remove($key);
  }

}
