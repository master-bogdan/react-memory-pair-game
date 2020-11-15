import Dart from '../../Assets/images/1.jpg';
import Luke from '../../Assets/images/2.jpg';
import Akbar from '../../Assets/images/3.jpg';
import Obi from '../../Assets/images/4.jpg';
import Ayla from '../../Assets/images/5.jpg';
import Jaja from '../../Assets/images/6.jpg';
import Card from '../../Assets/images/card.jpg';

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