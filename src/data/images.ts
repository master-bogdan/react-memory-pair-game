import Dart from 'assets/images/1.jpg';
import Luke from 'assets/images/2.jpg';
import Akbar from 'assets/images/3.jpg';
import Obi from 'assets/images/4.jpg';
import Ayla from 'assets/images/5.jpg';
import Jaja from 'assets/images/6.jpg';
import Card from 'assets/images/card.jpg';

type ICard = {
  name: string
  pic: any
  flipped: boolean
}

const imgArray: Array<ICard> = [
  {
    name: 'Dart',
    pic: Dart,
    flipped: false,
  },
  {
    name: 'Luke',
    pic: Luke,
    flipped: false,
  },
  {
    name: 'Akbar',
    pic: Akbar,
    flipped: false,
  },
  {
    name: 'Obi',
    pic: Obi,
    flipped: false,
  },
  {
    name: 'Ayla',
    pic: Ayla,
    flipped: false,
  },
  {
    name: 'JaJa',
    pic: Jaja,
    flipped: false,
  },
  {
    name: 'card',
    pic: Card,
    flipped: false,
  },
];

export const images: Array<ICard> = [];
for (let i = 0; i < imgArray.length - 1; i++) {
  images.push(imgArray[i], imgArray[i]);
}

export const cover = [
  {
    name: 'card',
    pic: Card,
    flipped: false,
  },
];
