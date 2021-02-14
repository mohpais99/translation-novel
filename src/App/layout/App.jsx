import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Menu, Footer, Sidebar } from 'App/components';
import { connect } from 'react-redux';
import routes from '../Routes';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={prop.path}
                    render={props => 
                        <prop.component {...props} />
                    }
                    exact />
            );
        });
    }
    render() {
        console.log(this.props.sidebar);
        return (
            <>  
                {/* {
                    this.props.sidebar.status && (
                        <Sidebar />
                    )
                } */}
                <Sidebar status={this.props.sidebar.status} />
                <div className="wrapper">
                    <Menu />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Footer />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    sidebar: state.Sidebar
});

export default connect(mapStateToProps)(App);
