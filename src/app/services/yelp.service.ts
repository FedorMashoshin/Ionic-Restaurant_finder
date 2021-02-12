import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) {
    this.http.get(`https://api.yelp.com/v3/businesses/search?latitude=49.285021&longitude=-122.7916966`).subscribe(res => {
      console.log('RESULT: ', res)
    })
  }
}
