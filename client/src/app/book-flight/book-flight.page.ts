import { Component, OnInit } from '@angular/core';
import { SearchProvider } from '../service/search';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.page.html',
  styleUrls: ['./book-flight.page.scss'],
})
export class BookFlightPage implements OnInit {
  schedule;
  passenger;
  total ;
  passengerList = [];
  constructor(public modalController: ModalController,public toastController: ToastController,public searchProvider: SearchProvider,) {

   
   }
  
  ngOnInit() {
   // this.total = this.schedule.charges;
    console.log("schedule" + JSON.stringify(this.schedule))
  }

  addPassenger(passenger){
    this.total = this.schedule.charges * this.passengerList.length;
    console.log(passenger)
    this.passengerList.push(passenger)
    console.log(this.passengerList)
  }

  bookFlight(){
    var req = {
      userId: 1,
      passengerList: this.passengerList.join(','),
      //charges: this.passengerList.length * this.schedule.charges,
      scheduleId: this.schedule.id
    }
    this.searchProvider.bookFlight(req).then(() =>{
      this.presentToast()
      this.dismiss();
    })
    console.log(this.passengerList)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Booked Successfully.',
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
