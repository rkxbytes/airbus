import { Component, OnInit } from '@angular/core';
import { SearchProvider } from '../service/search';
import { BookFlightPage } from '../book-flight/book-flight.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  fromid;
  toid;
  constructor(public searchProvider: SearchProvider,public modalController: ModalController,) {

  
  }

  ngOnInit(){
    this.searchProvider.getAirports();
    
  }
  onchangefrom(fromid){
    this.fromid = fromid;
    console.log(fromid)
  }
  onchangeto(toid){
    this.toid = toid;
    console.log(toid)
  }
  search(){
    console.log(this.fromid);
    var req = {
      fromid:this.fromid,
      toid: this.toid
    }
    this.searchProvider.getSchedules(req);
  }

  async bookFlight(schedule){
    console.log("I am working")
    const modal = await this.modalController.create({
      component: BookFlightPage,
      componentProps: {
        schedule: schedule,
      }
    }
    );
    return await modal.present();
  }
}
