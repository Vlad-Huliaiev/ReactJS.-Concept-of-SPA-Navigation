import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Header from "./header/header.js";
import Start from "./start/start.js";
import Photo from "./pin/renderPin.js";
import Posts from './posts/posts.js';
import Contacts from './contacts/contacts.js';


export const MENU = [
    {
        title: "Start",
        path: "/start",
        component: Start ,
    },{
        title: "Photo",
        path: "/Photo",
        component: Photo,
        exact: true
    },{
        title: "Posts",
        path: "/posts",
        component: Posts,
        exact: true
    },{
        title: "Contacts",
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
                    {MENU.map(({path, component, exact=false}) => (
                        <Route path={path} exact={exact} component={component} />
                    ))}
                </Switch>
            </Router>
        </div>
        )
    }
}

export default App;
