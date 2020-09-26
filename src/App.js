import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Header from "./header/header.js";
import start from "./start/start.js";
import photo from "./pin/renderPin.js";
import posts from './posts/posts.js';
import contacts from './contacts/contacts.js';


export const Menu = [
    {
        title: "start",
        path: "start",
        component: start ,
    },{
        title: "photo",
        path: "photo",
        component: photo,
        exact: true
    },{
        title: "posts",
        path: "posts",
        component: posts,
        exact: true
    },{
        title: "contacts",
        path: "contacts",
        component: contacts,
        exact: true
    }
];

function App() {

        return (
        <div>
            <Router basename={'/ReactJS.-Concept-of-SPA-Navigation'}>
                <Header />
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/start"/>} />
                    <Route exact path={'/start'} component={start} />
                    <Route exact path={'/photo'} component={photo} />
                    <Route exact path={'/posts'} component={posts} />
                    <Route exact path={'/contacts'} component={contacts} />
                </Switch>
            </Router>
        </div>
        )
    }

export default App;
