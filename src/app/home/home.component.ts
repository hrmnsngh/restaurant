import { Component, OnInit } from '@angular/core';
//import { ZomatoService } from "./zomato.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restList=  [
      {
        "collection": {
          "collection_id": 344,
          "res_count": 14,
          "image_url": "https://b.zmtcdn.com/data/collections/273612e3880fa4790562ee39cf48be8b_1445579359_l.jpg",
          "url": "https://www.zomato.com/ncr/delivery-only-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Just Delivery",
          "description": "Get your grub right at your doorstep",
          "share_url": "http://www.zoma.to/c-1/344",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram,Noida",
          "rating": 5
        }
      },
      {
        "collection": {
          "collection_id": 183,
          "res_count": 69,
          "image_url": "https://b.zmtcdn.com/data/collections/fe80e560421fcaea5ba5fc83d5289562_1459586727.jpg",
          "url": "https://www.zomato.com/ncr/late-night-delivery?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Late Night Delivery",
          "description": "For those crazy, late night hunger pangs",
          "share_url": "http://www.zoma.to/c-1/183",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 4
        }
      },
      {
        "collection": {
          "collection_id": 306431,
          "res_count": 11,
          "image_url": "https://b.zmtcdn.com/data/collections/034e60e3de4c671c52410e715ff12712_1584617110.jpg",
          "url": "https://www.zomato.com/ncr/takeaway-delivery?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Takeaway & Delivery",
          "description": "takeaway-delivery",
          "share_url": "http://www.zoma.to/c-1/306431",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 1
        }
      },
      {
        "collection": {
          "collection_id": 1,
          "res_count": 30,
          "image_url": "https://b.zmtcdn.com/data/collections/e1d5e8f900dbca01d11f353ef4b6a97c_1581661395.jpg",
          "url": "https://www.zomato.com/ncr/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Trending This Week",
          "description": "Most popular restaurants in town this week",
          "share_url": "http://www.zoma.to/c-1/1",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 306449,
          "res_count": 121,
          "image_url": "https://b.zmtcdn.com/data/collections/105153a6d17514c0b1e32900a56c58e5_1584436497.jpg",
          "url": "https://www.zomato.com/ncr/best-of-hyperpure?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Best of Hyperpure",
          "description": "Food made with the freshest ingredients.",
          "share_url": "http://www.zoma.to/c-1/306449",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 274852,
          "res_count": 299,
          "image_url": "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg",
          "url": "https://www.zomato.com/ncr/great-food-no-bull?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Best of Delhi NCR",
          "description": "The hunt for the highest-rated restaurants in your city ends here",
          "share_url": "http://www.zoma.to/c-1/274852",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 4,
          "res_count": 21,
          "image_url": "https://b.zmtcdn.com/data/collections/b1d388518012c80696487c08ca08e325_1582201041.jpg",
          "url": "https://www.zomato.com/ncr/outdoor-dining?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Outdoor Seating",
          "description": "The most idyllic outdoor-dining spots in the city",
          "share_url": "http://www.zoma.to/c-1/4",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 13,
          "res_count": 25,
          "image_url": "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
          "url": "https://www.zomato.com/ncr/rooftop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Rooftops",
          "description": "If you fancy a meal with a view",
          "share_url": "http://www.zoma.to/c-1/13",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 438,
          "res_count": 69,
          "image_url": "https://b.zmtcdn.com/data/collections/7f68fde319524e0d152ac8f01c89623c_1582286063.jpg",
          "url": "https://www.zomato.com/ncr/top-cafes?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Great Cafes",
          "description": "Grab a bite to eat, a cup of coffee, and catch up with friends or family",
          "share_url": "http://www.zoma.to/c-1/438",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 4
        }
      },
      {
        "collection": {
          "collection_id": 225,
          "res_count": 43,
          "image_url": "https://b.zmtcdn.com/data/collections/e0ce96d87dbbd975662d28bb43b335ac_1582603125.jpg",
          "url": "https://www.zomato.com/ncr/fine-dining-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Luxury Dining",
          "description": "The best restaurants in town for a complete fine-dining experience",
          "share_url": "http://www.zoma.to/c-1/225",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 2
        }
      },
      {
        "collection": {
          "collection_id": 305356,
          "res_count": 16,
          "image_url": "https://b.zmtcdn.com/data/collections/d5fee6a5e24cda1629f810c3836dcb1f_1582106775.jpg",
          "url": "https://www.zomato.com/ncr/for-the-planet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "For The Planet",
          "description": "Start your 2020, on a greener note!",
          "share_url": "http://www.zoma.to/c-1/305356",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 5
        }
      },
      {
        "collection": {
          "collection_id": 285,
          "res_count": 13,
          "image_url": "https://b.zmtcdn.com/data/collections/bd128475c037832b46960ef9b2910b05_1582201433.jpg",
          "url": "https://www.zomato.com/ncr/vegan-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Vegan's Choice",
          "description": "Go all out & treat yourself with the best of vegan food in town",
          "share_url": "http://www.zoma.to/c-1/285",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 1
        }
      },
      {
        "collection": {
          "collection_id": 7,
          "res_count": 39,
          "image_url": "https://b.zmtcdn.com/data/collections/2683237a53944cfd9801c2fabd5cdf32_1582082375.jpg",
          "url": "https://www.zomato.com/ncr/legendary-places?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Legendary Outlets",
          "description": "They say old is gold and here's the proof",
          "share_url": "http://www.zoma.to/c-1/7",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 327,
          "res_count": 38,
          "image_url": "https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582082248.jpg",
          "url": "https://www.zomato.com/ncr/family-dining?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "For The Family",
          "description": "The best places to enjoy a nice family dinner",
          "share_url": "http://www.zoma.to/c-1/327",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 3,
          "res_count": 29,
          "image_url": "https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg",
          "url": "https://www.zomato.com/ncr/romantic-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Romantic",
          "description": "The perfect spots for a romantic meal",
          "share_url": "http://www.zoma.to/c-1/3",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 75,
          "res_count": 19,
          "image_url": "https://b.zmtcdn.com/data/collections/f9d822284b336c1eb8c3af8c42216389_1460023238.jpg",
          "url": "https://www.zomato.com/ncr/best-bars-and-pubs?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Best Bars and Pubs",
          "description": "Find the best bars & pubs in your city",
          "share_url": "http://www.zoma.to/c-1/75",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 25,
          "res_count": 9,
          "image_url": "https://b.zmtcdn.com/data/collections/947e5d32d13e41d4a14a9fce97236fac_1578981328.jpg",
          "url": "https://www.zomato.com/ncr/pet-friendly-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Pet Friendly",
          "description": "A pet lover? Chill out with your furry best friend at these spots ",
          "share_url": "http://www.zoma.to/c-1/25",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 321,
          "res_count": 26,
          "image_url": "https://b.zmtcdn.com/data/collections/f672e9556e44fe33ff47bf751639c0bd_1535356450.jpg",
          "url": "https://www.zomato.com/ncr/pizza-time?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Best Pizza Places In Town",
          "description": "The best pizza places in town",
          "share_url": "http://www.zoma.to/c-1/321",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 58,
          "res_count": 49,
          "image_url": "https://b.zmtcdn.com/data/collections/3fa6a1d163fa81af3b4fb3e33a7bb540_1535355867.jpg",
          "url": "https://www.zomato.com/ncr/asian-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Pan-Asian Delicacies",
          "description": "The best places for Asian fare",
          "share_url": "http://www.zoma.to/c-1/58",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 490,
          "res_count": 33,
          "image_url": "https://b.zmtcdn.com/data/collections/3242a1273d76b53b31c70124fb66ad7e_1535355181.jpg",
          "url": "https://www.zomato.com/ncr/healthy-living?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Counting Calories? Try These Places",
          "description": "These eateries make healthy food a tasty affair",
          "share_url": "http://www.zoma.to/c-1/490",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 104,
          "res_count": 16,
          "image_url": "https://b.zmtcdn.com/data/collections/3041fff41bc70a34c937247381df8417_1418390780_l.jpg",
          "url": "https://www.zomato.com/ncr/meat-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Meat Cravings",
          "description": "For when chicken and fish just aren't enough.",
          "share_url": "http://www.zoma.to/c-1/104",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 5,
          "res_count": 39,
          "image_url": "https://b.zmtcdn.com/data/collections/d38669ed7b829ceb2814678420a629da_1560353561.jpg",
          "url": "https://www.zomato.com/ncr/best-burger?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Kickass Burgers",
          "description": "Chow down on a cheeselicious burger!",
          "share_url": "http://www.zoma.to/c-1/5",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 3
        }
      },
      {
        "collection": {
          "collection_id": 296593,
          "res_count": 9,
          "image_url": "https://b.zmtcdn.com/data/collections/7c294a95b9ae5726e8d4ba5f60c9de71_1569505536.jpeg",
          "url": "https://www.zomato.com/ncr/best-of-gold?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          "title": "Best of Gold",
          "description": "Member favourite restaurants & bars",
          "share_url": "http://www.zoma.to/c-1/296593",
          "offer": "50% off upto Rs100 on min order of Rs 300",
          "branches":"Delhi, Gurugram, Noida",
          "rating": 4
        }
      }];
  constructor() { }

/*   getRest(){
    this.zomato.GetDelhiRestaurants().subscribe(
      (response)=>{},
      (error)=>{
        console.log("Error fetching rest details: ", JSON.stringify(error));
      }
    );
  } */S
  
  ngOnInit() {

  }

}
