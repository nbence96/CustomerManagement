import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from 'src/app/shared/models/Customer.model';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  customer ?: any[];
  constructor(private afs: AngularFirestore) { 
    this.readData1();
    this.readData2();
  }

  ngOnInit(): void {
  }

  readData1(): void{
    this.afs.collection("creditprofile",r => r.where("creditProfileDate",">=","2015").orderBy("creditProfileDate","asc").orderBy("creditScore"))
    .get().subscribe(res => {
      console.log("2015 után lértehozott CreditProfile-ok:")
      res.docs.forEach(el => {
        console.log(el.data());
      })
    },error => {
      console.log('kiolvasasi hiba: ', error);
    })
  }

  readData2(): void{
    this.afs.collection("customer",r => r.where("validFor",">",5).orderBy("validFor","asc").orderBy("name"))
    .get().subscribe(res => {
      console.log("5-nél nagyobb validFor-al rendelkező customer-ek:")
      res.docs.forEach(el => {
        console.log(el.data());
      })
    },error => {
      console.log('kiolvasasi hiba: ', error);
    })
  }
}
