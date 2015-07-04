import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Profile from './profile';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Matches extends React.Component {
	render() {
		return(
		<div className='Grid'>
		  <div className='Row'>
		  <div className='Col'>
		    <img src='/images/girl.jpg' className='Img'/>
		  </div>
		  <div className='Col'>
		    <p className='Text'>Someone who exercises initiative by organizing a venture to take benefit of an opportunity and, as ervice will be produced.</p>
		  </div>
		  <div className='Col'>
		    <Button bsStyle='success' className='Button'>Chat</Button>
		  </div>
		  </div>
		</div>
			);
	}
}