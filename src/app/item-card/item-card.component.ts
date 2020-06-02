import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() restaurantData;
  rating;
  starRating='';

  constructor() { }

  Rate(){
    let starFilled = '<span class="glyphicon glyphicon-star"></span>';
    let starEmpty = '<span class="glyphicon glyphicon-star-empty"></span>';
    for(let i=0;i<this.rating; i++){
      this.starRating+= starFilled;
    }
    for(let i=0;i<(5-this.rating); i++){
      this.starRating+= starEmpty;
    }
    this.starRating+=this.rating;
  }

  ngOnInit() {
    this.rating = this.restaurantData.rating;
    this.Rate();
  }

}
