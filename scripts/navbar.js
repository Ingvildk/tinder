import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';
var { Navbar, NavItem, DropdownButton, MenuItem, Nav } = ReactBootstrap;

import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class NavBar extends React.Component {
	render() {
		return (
              <Navbar brand='tinder'  inverse toggleNavKey={0}>
              	<Nav right eventKey={0}>
              		<NavItemLink to='Home' eventKey={1} href='#'>Home</NavItemLink>
              		<NavItemLink to='Match' eventKey={2} href='#'>Match</NavItemLink>
              	</Nav>
 			  </Navbar>
			);
	}   
};