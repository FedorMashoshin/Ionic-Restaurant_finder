import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const CORS = 'https://academy-yelp-api-proxy.herokuapp.com';
const URL = 'https://api.yelp.com/v3'

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(
    private http: HttpClient) {
  }
  getCurrentPosition(lat, long){
    return this.http.get(`${CORS}/${URL}/businesses/search?latitude=${lat}&longitude=${long}`).subscribe(res => {
      console.log('YELP RESULT: ', res)
    });
  }
}
