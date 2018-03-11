import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {delay} from 'rxjs/operators';

const hotels = [
  {
    id: 1,
    name: 'Hotel Italia',
    address: 'Via Venezia 18, Rione Monti, 00184 Rome, Italy',
    phone: '+4 285 444 685',
    images: [
      'http://localhost:4200/assets/images/hotel_1/2234.jpg',
      'http://localhost:4200/assets/images/hotel_1/64766964.jpg',
      'http://localhost:4200/assets/images/hotel_1/64766966.jpg'
    ],
    description: 'Hotel Italia is in Rome’s historic center, a 5-minute walk from Repubblica Metro Station and the Quirinale Palace.',
    weather: {
      air: 25,
      water: 20,
    },
    twitter: {
      followers: 1123,
      following: 300
    }
  },
  {
    id: 2,
    name: 'Hotel Impero',
    address: 'Via Del Viminale 19, Central Station, 00184 Rome, Italy',
    phone: '+4 333 424 333',
    images: [
      'http://localhost:4200/assets/images/hotel_2/2184.jpg',
      'http://localhost:4200/assets/images/hotel_2/10090866.jpg',
      'http://localhost:4200/assets/images/hotel_2/60689066.jpg'
    ],
    description: 'Featuring free WiFi throughout the property, Hotel Impero offers accommodations in Rome. Guests can enjoy the on-site bar.', // tslint:disable-line max-line-length
    weather: {
      air: 26,
      water: 23,
    },
    twitter: {
      followers: 3223,
      following: 412
    }
  },
  {
    id: 3,
    name: 'Hotel Nord Nuova Roma',
    address: 'Via G. Amendola 3, Central Station, 00185 Rome, Italy',
    phone: '+4 111 222 333',
    images: [
      'http://localhost:4200/assets/images/hotel_3/61321.jpg',
      'http://localhost:4200/assets/images/hotel_3/35964304.jpg',
      'http://localhost:4200/assets/images/hotel_3/47265674.jpg'
    ],
    description: 'Featuring free WiFi throughout the property, Hotel Nord Nuova Roma offers accommodations in Rome, just 400 m from Santa Maria Maggiore. The hotel has a sun terrace and fitness center, and guests can enjoy a drink at the bar.', // tslint:disable-line max-line-length
    weather: {
      air: 24,
      water: 22,
    },
    twitter: {
      followers: 4223,
      following: 612,
    }
  }
];
export const hotels$ = Observable.of(hotels)
  .pipe(delay(3000));
