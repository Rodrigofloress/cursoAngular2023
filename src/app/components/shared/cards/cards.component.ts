import { Component } from '@angular/core';

interface IDataCard{
    name: string,
    urlImg: string,
    point: number,
    description: string,
    category: string,
    id: string,
}

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css'
]
})
export class CardsComponent {

arrayInfoCards: IDataCard [] = [
    {
    name: 'Black Widow',
    urlImg: '../../assets/cartelera/BlackWidow.jpg',
    point: 6.18,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Shang Chii',
    urlImg: '../../assets/cartelera/ShangChii.jpg',
    point: 8.2,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Loki',
    urlImg: '../../assets/cartelera/Loki.jpg',
    point: 7.9,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'How I Met Your Mother',
    urlImg: '../../assets/cartelera/HowIMetYourMother.jpg',
    point: 7.3,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Money Heist',
    urlImg: '../../assets/cartelera/MoneyHeist.jpg',
    point: 8.3,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Friends',
    urlImg: '../../assets/cartelera/friends.jpg',
    point: 10.3,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'The big bang Theory',
    urlImg: '../../assets/cartelera/thebigbangtheory.jpg',
    point: 8.7,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Two and a half men',
    urlImg: '../../assets/cartelera/twomen.jpg',
    point: 7,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Hulk',
    urlImg: '../../assets/cartelera/hulk.jpg',
    point: 9.4,
    description: '',
    category: '',
    id: '',
    },

    {
    name: 'Iron Man',
    urlImg: '../../assets/cartelera/ironman.jpg',
    point: 9.6,
    description: '',
    category: '',
    id: '',
    }
]
}
