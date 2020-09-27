import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";

import Header from "./header/header.js";
import Main from "./start/start.js";
import Photos from "./pin/renderPin.js";
import Post from './posts/posts.js';
import Contact from './contacts/contacts.js';

export const Menu = [
    {
        title: "main",
        path: "/start",
        component: Main,
    },{
        title: "photos",
        path: "/photos",
        component: Photos,
        exact: true
    },{
        title: "post",
        path: "/post",
        component: Post,
        exact: true
    },{
        title: "contact",
        path: "/contact",
        component: Contact,
        exact: true
    }
];

function App() {
        return (
            <HashRouter>
                <div>
                <Header />
                    <Switch>
                        <Route path="/main" render = {() => <Main />} />
                        <Route path="/photos" render = {() => <Photos />} />
                        <Route path="/post" render = {() => <Post />} />
                        <Route path="/contact" render = {() => <Contact />} />
                        <Route path="/" exact render={() => <Redirect to="/main"/>}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    };

export default App;
