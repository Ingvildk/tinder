import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import NavBar from './navbar';
import Home from './home';
import Profile from './profile';
import Match from './match';

var { Route, DefaultRoute, RouteHandler, Link } = Router;

class App extends React.Component{
	constructor() {
		super();
		this.state = {
			sidebarOpen: false
		};
	}

	render() {
		return (
			<div className='App'>
        		<NavBar />
				<div className='conatiner'x>
				<RouteHandler {...this.props} />
				</div>			
			</div>
			)
	}
} 



var routes = (
	<Route handler={App} name='App' path='/'>
		<Route handler={Home} name='Home' path='home' />
		<Route handler={Profile} name='Profile' path='profile' />
		<Route handler={Match} name='Match' path='match' />
	</Route>
	);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});