import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as moment from 'moment';
@Injectable()
export class SearchProvider {
  airports = []
  schedules = []
  constructor(public http: HttpClient, public zone: NgZone) {

  }



  getAirports() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.hostIpAddress}/getAirports`).subscribe((res: any) => {
        console.log("get getAirports " + JSON.stringify(res))
        this.airports = res.data;
        // if (res.status == true) {
        //   this.detections = res.data;

        //   this.detections.forEach((detection) => {
        //     detection.requestImagePath = environment.hostIpAddress + "/" + detection.requestImagePath;
        //   })
   
        // }
        resolve();
      })
    });
  }

  getSchedules(req) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.hostIpAddress}/getSchedules`, req).subscribe((res: any) => {
        console.log("get getSchedules " + JSON.stringify(res))
        this.schedules = res.data;
        this.schedules.forEach((search) => {
          console.log(search);
            //  search. = moment(search.Time).format('DD-MM-YYYY');
              search.arrivaltime = moment(search.arrivaltime).format('hh:mm A');
              search.departuretime = moment(search.departuretime).format('hh:mm A');

              console.log(search);
        });
        // if (res.status == true) {
        //   this.detections = res.data;

        //   this.detections.forEach((detection) => {
        //     detection.requestImagePath = environment.hostIpAddress + "/" + detection.requestImagePath;
        //   })
   
        // }
        resolve();
      })
    });
  }

  bookFlight(req) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.hostIpAddress}/bookFlight`, req).subscribe((res: any) => {
        console.log("get bookFlight " + JSON.stringify(res))
       
        // if (res.status == true) {
        //   this.detections = res.data;

        //   this.detections.forEach((detection) => {
        //     detection.requestImagePath = environment.hostIpAddress + "/" + detection.requestImagePath;
        //   })
   
        // }
        resolve();
      })
    });
  }








}

