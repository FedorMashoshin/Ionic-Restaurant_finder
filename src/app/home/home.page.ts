import { YelpService } from './../services/yelp.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  geo: any;
  latitude: string = null;
  longitude: string = null;

  showNearbyRestaurants: boolean = false;
  restaurants: any;
  nearbyRestaurants: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private yelpService: YelpService,
    private geolocation: Geolocation
    ) { }

  ngOnInit(){
    this.geolocation.watchPosition().subscribe((res) => {
      this.geo = res;
      this.latitude = this.geo.coords.latitude;
      this.longitude = this.geo.coords.longitude;

      if (this.latitude && this.longitude) {
        this.yelpService.getCurrentPosition(this.latitude, this.longitude).subscribe(res => {
          this.restaurants = res;
          this.nearbyRestaurants = this.restaurants.businesses;
          console.log('RESTAURANTS:', this.nearbyRestaurants)
        })
      };
      });
  }
}
