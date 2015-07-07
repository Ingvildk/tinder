import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import messageStore from './stores/messageStore';
import userStore from './stores/userStore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Message extends React.Component {

	constructor() {
		super();
		this.state = messageStore.getState();
	}

	componentDidMount() {
		this.setState({ user: userStore.getState() })
	}

	render() {
	var melding = this.state.Emilia;
	/*var user = this.state.user.user;	*/
	var currentdate = new Date(); 
	var datetime =currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();	
	
	var messages = melding.map(function(dict, index) {
				return (
					<div>
					  <Row>
					  <Col xs={6} md={3}>
					    <p >{dict.message}</p>
					  </Col>			  
					  </Row>
					  <Row>
					  <Col xs={6} md={3}>
					  </Col>
					  <Col xs={6} md={3} className='divmessageText'>
					    <p className='messageText'>{dict.message}</p>
					  </Col>			  
					  </Row>					  					
					  </div>
					);				
				})	
			return (
				<div className='message'>
					<Grid>
					  <Row>
					  <Col xs={6} md={3}>
					    <Thumbnail href='#' alt='171x180' src='./images/girl2.jpg'/>
					  </Col>			  
					  </Row>
						{messages}	  					
					</Grid>
				</div>
				);
	}
};	