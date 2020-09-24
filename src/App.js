import React from 'react';
import Posts from './posts/posts.js';
import Contacts from './contacts/contacts.js';
import renderTimer  from "./timer/renderTimer.js";
import Header from "./header/header.js";
import Start from "./start/start.js";
import Photo from "./pin/renderPin.js";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


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


class App extends React.Component {
    render() {
        return (
            <Router basename='/ReactJS.-Concept-of-SPA-Navigation'>
                <Header />
                <Switch>
                <Route path="/" exact render={() => <Redirect to="/start"/>} />
                    {MENU.map(({path, component, exact=false}) => (
                        <Route path={path} exact={exact} component={component} />
                    ))}
                </Switch>
            </Router>
        )
    }
}

export default App;
