import { Component, OnInit } from '@angular/core';

import { MapButtonsService } from '../shared/map-buttons.service';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private mapButtonsService : MapButtonsService) { }

  ngOnInit() {
  }

}
