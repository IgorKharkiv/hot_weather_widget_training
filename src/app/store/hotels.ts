import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {delay} from 'rxjs/operators';
import {baseUrl} from '../shared/global-constants';
const hotels = [
  {
    id: 1,
    name: 'Hotel Italia',
    address: 'Via Venezia 18, Rione Monti, 00184 Rome, Italy',
    phone: '+4 285 444 685',
    tags: ['hotel'],
    images: [
      `${baseUrl}/assets/images/hotel_1/2234.jpg`,
      `${baseUrl}/assets/images/hotel_1/64766964.jpg`,
      `${baseUrl}/assets/images/hotel_1/64766966.jpg`
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
    tags: ['hotel', 'tour'],
    images: [
      `${baseUrl}/assets/images/hotel_2/2184.jpg`,
      `${baseUrl}/assets/images/hotel_2/10090866.jpg`,
      `${baseUrl}/assets/images/hotel_2/60689066.jpg`
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
    tags: ['hotel', 'tour'],
    images: [
      `${baseUrl}/assets/images/hotel_3/61321.jpg`,
      `${baseUrl}/assets/images/hotel_3/35964304.jpg`,
      `${baseUrl}/assets/images/hotel_3/47265674.jpg`
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
  },
  {
    id: 4,
    name: 'Suite Hotel Elite',
    address: 'Via Aurelio Saffi 40, 40131 Bologna, Italy',
    phone: '+4 000 222 333',
    tags: ['hotel', 'sea', 'tour'],
    images: [
      `${baseUrl}/assets/images/hotel_4/6353004.jpg`,
      `${baseUrl}/assets/images/hotel_4/15772141.jpg`,
      `${baseUrl}/assets/images/hotel_4/114461722.jpg`
    ],
    description: 'Bologna\'s Suite Elite is a design 4-star hotel a 15-minute walk from Piazza Maggiore and an 8 minute-drive from Guglielmo Marconi Airport. Rooms have free Wi-Fi. The hotel features a free garage, and a private parking nearby.', // tslint:disable-line max-line-length
    weather: {
      air: 29,
      water: 25,
    },
    twitter: {
      followers: 2263,
      following: 1212,
    }
  },
  {
    id: 5,
    name: 'Hotel Bristol Palace',
    address: 'Via XX Settembre 35, Genoa Historical Centre, 16121 Genoa, Italy',
    phone: '+4 777 666 333',
    tags: ['hotel', 'sea'],
    images: [
      `${baseUrl}/assets/images/hotel_5/36468151.jpg`,
      `${baseUrl}/assets/images/hotel_5/46256346.jpg`
    ],
    description: 'The Bristol Palace features an impressive elliptical staircase, leading to its elegant rooms. This historic building is in central Genoa, 100 m from Piazza De Ferrari.', // tslint:disable-line max-line-length
    weather: {
      air: 32,
      water: 28,
    },
    twitter: {
      followers: 2263,
      following: 1212,
    }
  }
];
export const hotels$ = Observable.of(hotels)
  .pipe(delay(3000));
