import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../component/Index';
import ArticleId from '../component/ArticleId';
import Menu from '../component/Menu';
import About from '../component/About';
import User from '../component/User';
import Login from '../component/Login';


class Main extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};
const route = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Index} />
			<Route path="Article/:id" component={ArticleId} />
			<Route path="Menu" component={Menu} />
			<Route path="About" component={About} />
			<Route path="User" component={User} />
			<Route path="Login" component={Login} />
		</Route>
	</Router>
);

export default route;