import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Profile from './profile';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Matche extends React.Component {
	render() {
		return(
			<div>
				<div className='Col'>
					<div><img className='photo' src='/images/girl.jpg' /></div>
					<div className='text'><p className='text_two'> You can define how an individual flex item grows and shrinks relative to other 
					flex items in the container. To do this set the flex property on each flex item you want to grow or shrink.</p>
					<Button bsStyle='success' className='Button'>Chat</Button>
					</div>
				</div>
				<div className='Col'>
					<div><img className='photo' src='/images/girl2.jpg' /></div>
					<div className='text'><p className='text_two'> You can define how an individual flex item grows and shrinks relative to other 
					flex items in the container. To do this set the flex property on each flex item you want to grow or shrink.</p>
					<Button bsStyle='success' className='Button'>Chat</Button>
					</div>
				</div>
				<div className='Col'>
					<div><img className='photo' src='/images/girl3.jpg' /></div>
					<div className='text'><p className='text_two'> You can define how an individual flex item grows and shrinks relative to other 
					flex items in the container. To do this set the flex property on each flex item you want to grow or shrink.</p>
					<Button bsStyle='success' className='Button'>Chat</Button>
					</div>
				</div>
				<div className='Col'>
					<div><img className='photo' src='/images/girl4.jpg' /></div>
					<div className='text'><p className='text_two'> You can define how an individual flex item grows and shrinks relative to other 
					flex items in the container. To do this set the flex property on each flex item you want to grow or shrink.</p>
					<Button bsStyle='success' className='Button'>Chat</Button>
					</div>
				</div>												
			</div>
			);
	}
};