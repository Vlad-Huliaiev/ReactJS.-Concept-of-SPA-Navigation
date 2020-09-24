import React, { Component }  from 'react';
import Pin from "./pin.js";
import {ContainerPhoto} from "./renderPinStyle.js";

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';
import img10 from '../img/10.jpg';
import img11 from '../img/11.jpg';
import img12 from '../img/12.jpg';
import img13 from '../img/13.jpg';
import img14 from '../img/14.jpg';
import img15 from '../img/15.jpg';
import img16 from '../img/16.jpg';
import img17 from '../img/17.jpg';
import img18 from '../img/18.jpg';
import img19 from '../img/19.jpg';
import img20 from '../img/20.jpg';

const Photo = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 },
    { image: img10 },
    { image: img11 },
    { image: img12 },
    { image: img13 },
    { image: img14 },
    { image: img15 },
    { image: img16 },
    { image: img17 },
    { image: img18 },
    { image: img19 },
    { image: img20 }
];

export default class RenderPin extends Component {
    render() {
        return (
        <ContainerPhoto>
            { Photo.map(photos =>  <Pin {...photos}/>) }
        </ContainerPhoto>
        );
    }
}