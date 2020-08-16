import Dart from './Files/1.jpg';
import Luke from './Files/2.jpg';
import Akbar from './Files/3.jpg';
import Obi from './Files/4.jpg';
import Ayla from './Files/5.jpg';
import Jaja from './Files/6.jpg';
import Card from './Files/card.jpg';

const imgArray = [
        {
            name: 'Dart',
            pic: Dart,
            flipped: false
        },
        {
            name: 'Luke',
            pic: Luke,
            flipped: false
        },
        {
            name: 'Akbar',
            pic: Akbar,
            flipped: false
        },
        {
            name: 'Obi',
            pic: Obi,
            flipped: false
        },
        {
            name: 'Ayla',
            pic: Ayla,
            flipped: false
        },
        {
            name: 'JaJa',
            pic: Jaja,
            flipped: false
        },
        {
            name: 'card',
            pic: Card,
            flipped: false
        }
];

export const images = [];
    for (let i = 0; i < imgArray.length - 1; i++) {
        images.push(imgArray[i], imgArray[i]);
    }
    
export const cover = [
    {
        name: 'card',
        pic: Card,
        flipped: false
    }
];