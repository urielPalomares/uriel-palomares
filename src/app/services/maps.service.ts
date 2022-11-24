import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public useLocation?: [number, number];

  get isUserLocationReady() {
    return !!this.getLocationUser;
  }

  constructor() {
    this.getLocationUser();
  }

  public async getLocationUser(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {

      
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          console.log(coords)
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation)
        }, (err) => {
          alert('No se pudo obtener la localización')
          console.error(err);
          reject();
        }
      )

    })
  }
}
