import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../pages/Home';
import Order from '../pages/Order';
import Card from '../pages/Card';
import Gift from '../pages/Gift';
import Store from '../pages/Store';

import './Navmenu.scss';

export default function Navmenu() {
    return (
        <Router>
            <div className="mavmenu-component">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/card">Card</Link></li>
                        <li><Link to="/gift">Gift</Link></li>
                        <li><Link to="/store">Store</Link></li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/card" component={Card} />
                    <Route path="/gift" component={Gift} />
                    <Route path="/store" component={Store} />
                </Switch>
            </div>
        </Router>
    );
}