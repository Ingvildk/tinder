import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Profile from './profile';
import matchStore from './stores/matchStore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Matche extends React.Component {

	constructor(props) {
		super(props);
		this.state = matchStore.getState();	
	}

	render() {
		if( this.state.match.length == 0 ) {
			return (<p>You currently have no matches. Start searching now! </p>);
		} else {
			var count = 0;
			var match = this.state.match.map(function(dict, index) {
				count++;	
				return(
					
						<div className='Col'>
							<div><img className='photo' src={dict.img} /></div>
							<div className='text'><p className='text_two'>{dict.bio}</p>
							<Button bsStyle='success' className='Button'>Chat</Button>
							</div>
						</div>											
					
					);
				})
			return(
				<div>
					{match}
				</div>
				);
			}	
		}
	};	