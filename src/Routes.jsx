import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from 'App/layout/App';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" render={props => <App {...props} />}  />
            </Switch>
        </Router>
    )
}
