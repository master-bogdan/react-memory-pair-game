import Dart from 'assets/images/1.jpg';
import Luke from 'assets/images/2.jpg';
import Akbar from 'assets/images/3.jpg';
import Obi from 'assets/images/4.jpg';
import Ayla from 'assets/images/5.jpg';
import Jaja from 'assets/images/6.jpg';
import Card from 'assets/images/card.jpg';

export type ICard = {
  name: string
  pic: any
  flipped: boolean
  match: boolean
}

const imgArray: Array<ICard> = [
  {
    name: 'Dart',
    pic: Dart,
    flipped: false,
    match: false,
  },
  {
    name: 'Luke',
    pic: Luke,
    flipped: false,
    match: false,
  },
  {
    name: 'Akbar',
    pic: Akbar,
    flipped: false,
    match: false,
  },
  {
    name: 'Obi',
    pic: Obi,
    flipped: false,
    match: false,
  },
  {
    name: 'Ayla',
    pic: Ayla,
    flipped: false,
    match: false,
  },
  {
    name: 'JaJa',
    pic: Jaja,
    flipped: false,
    match: false,
  },
];

const imagesCopy: ICard[] = JSON.parse(JSON.stringify(imgArray));

export const images: ICard[] = imgArray.concat(imagesCopy);

export const cover = [
  {
    name: 'card',
    pic: Card,
    flipped: false,
  },
];
