import React, { Component }  from 'react';
import './posts.css';
import Skeleton from './skeleton.js';
import anakin from '../img/anakin_img.jpg';
import rey from '../img/rey_img.jpg';
import luke from '../img/luke_img.jpg';
import leia from '../img/leia_img.jpg';
import rey_avatar from '../img/rey_avatar.jpg';
import rey_2 from '../img/rey_img_2.jpg';
import rey_3 from '../img/rey_img_3.jpg';
import palpatine from '../img/palpatine.jpg';


const Post = [{
        name: "Anakin Skywalker",
        photo: anakin,
        nickname: "@dart_vader",
        date: "Feb 29",
        content: "WTF? Who is Rey? Why she is Skywalker? Luke...?",
        image: rey,
    },{
        name: "Luke Skywalker",
        photo: luke,
        nickname: "@defeated_sith",
        date: "Mar 1",
        content: "I don't know! I taught her for 1 day. Leia...?",
        image: rey_2,
    },{
        name: "Leia Skywalker",
        photo: leia,
        nickname: "@organa",
        date: "Mar 2",
        content: "Luke? We were together near Ray on Tatooine. Didn't you hear what she said? Why didn't he say anything then?",
        image: rey_3,
    },{
         name: "Rey Skywalker",
         photo: rey_avatar,
         nickname: "@last_jedi",
         date: "Mar 5",
         content: "Won't I introduce myself to Palpatine? He's...",
         image: palpatine,
    }
];


export default class Posts extends Component {
    render() {
        return (
        <div>
            { Post.map(posts =>  <Skeleton {...posts}/>) }
        </div>
        );
    }
}