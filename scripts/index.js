import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import NavBar from './navbar';
import Home from './home';
import Profile from './profile';
import Match from './match';

var { Route, DefaultRoute, RouteHandler, Link } = Router;

class App extends React.Component{
	render() {
		return (
			<div className='App'>
        		<NavBar />
				<div className='conatiner'>
				<RouteHandler {...this.props} />
				</div>			
			</div>
			)
	}
} 
/*
class App_two extends React.Component {
	render() {
		return (
			<div className='container_two'>
			<NavBar />
			</div>
			);
	}
}

var routes_two = (
	<Route handler={App_two} name='App_two' path='/'>
	</Route>
	);
*/
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

/*
Router.run(routes_two, function (Handler) {
  React.render(<Handler/>, document.getElementById('HolyGrail-nav-two'));
});
*/