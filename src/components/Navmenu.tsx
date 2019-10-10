import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Product from '../pages/Product';

export default function Navmenu() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Product</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Product />
                    </Route>
                    <Route path="/about">
                        {/* <About /> */}
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}