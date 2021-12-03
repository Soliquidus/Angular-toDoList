import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  secondesSub: any = Subscription;
  secondes: any;

  constructor() {
  }

  ngOnInit(): void {

    const secondesObs = interval(1000)
      // Méthode de création perso d'observable
    //   new Observable((observer) => {
    //   let value = 0;
    //   setInterval(() => {
    //       observer.next(value);
    //     value++;
    //   }, 1000);
    //   return () => clearInterval()
    // });

    this.secondesSub = secondesObs.subscribe(
      (value) => {
        this.secondes = value;
        console.log(value);
      }
    )
  }

  ngOnDestroy(): void {
    this.secondesSub.unsubscribe();
  }

}
