import React, {Component} from 'react';
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

class App extends Component {
    render() {
        return (
        <div>
            <Router basename='/ReactJS.-Concept-of-SPA-Navigation'>
                <Header />
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/start"/>} />
                    <Route exact path={'/start'} component={Start} />
                    <Route exact path={'/photo'} component={Photo} />
                    <Route exact path={'/posts'} component={Posts} />
                    <Route exact path={'/contacts'} component={Contacts} />
                </Switch>
            </Router>
        </div>
        )
    }
}

export default App;
