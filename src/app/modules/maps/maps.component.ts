import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../../environments/environment';
import { MapsService } from '../../services/maps.service';

mapboxgl.accessToken = environment.mapBoxKey;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  title = 'Mapa';
  mapa = mapboxgl.Map as any;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
    this.addMarker(-99.53214, 19.26757);
  }

  initMap() {
    this.mapa = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-99.53214, 19.26757], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    this.addSearch();
    this.addNavigation();
  }

  addMarker(lng: number, lat: number) {
    new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
  }

  addSearch() {
    this.mapa.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
  }

  addNavigation() {
    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    this.mapa.addControl(nav, 'bottom-right');
  }
}
