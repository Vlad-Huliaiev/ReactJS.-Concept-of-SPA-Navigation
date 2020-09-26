import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Header from "./header/header.js";
import Start from "./start/start.js";
import Photo from "./pin/renderPin.js";
import Posts from './posts/posts.js';
import Contacts from './contacts/contacts.js';


export const Menu = [
    {
        title: "start",
        path: "/start",
        component: Start ,
    },{
        title: "photo",
        path: "/photo",
        component: Photo,
        exact: true
    },{
        title: "posts",
        path: "/posts",
        component: Posts,
        exact: true
    },{
        title: "contacts",
        path: "/contacts",
        component: Contacts,
        exact: true
    }
];

class App extends React.Component {
    render() {
        return (
        <div>
            <Router basename='/ReactJS.-Concept-of-SPA-Navigation'>
                <Header />
                <Switch>
                <Route path="/" exact render={() => <Redirect to="/start"/>} />
                    {Menu.map(({path, component: Component, exact = false}) => (
                        <Route exact = {exact} path = {path} component = {Component} />
                    ))}
                </Switch>
            </Router>
        </div>
        )
    }
}

export default App;
