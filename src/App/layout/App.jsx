import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Menu, Footer, Sidebar } from 'App/components';
import { connect } from 'react-redux';
import routes from '../Routes';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: null
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth});
    }

    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={prop.path}
                    render={props => 
                        <prop.component {...this.state} {...props} />
                    }
                    exact />
            );
        });
    }
    render() {
        return (
            <>
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
