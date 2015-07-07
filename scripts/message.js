import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import messageStore from './stores/messageStore';
import userStore from './stores/userStore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail, Glyphicon } = ReactBootstrap;
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
	var user = this.state.user;
	var count = 0;
	var _class;
	var super_class;	
	var currentdate = new Date(); 
	var datetime =currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();	
	
	var messages = melding.map(function(dict, index) {
				count = count + 1;
				console.log(dict.name);
				if (dict.name == 'Ali') {
					_class = 'messageText';
					super_class = 'bubble';
				}else {
					_class = 'rightText';
					super_class='bubble_alternative';
				}
				/*console.log (melding[count].message) ; */
				return (
					<div>
					  <div>
					  <div className={_class}>
					  	<div className='rightImage'>
					    <p className={super_class}>{dict.message}</p>
					 	</div>
					  </div>			  
					  </div>					  					
					  </div>
					);				
				})	
			return (
				<div className='message'>
					<Grid>
					  <Row>
					  <Col xs={6} md={3}>
					    <Thumbnail href='#' alt='171x180' src='./images/flower2.jpg'/>
					  </Col>			  
					  </Row>
					  </Grid>
						{messages}
					<br/>		
					  <Input placeholder= 'Type in message ' type='text' className= 'messageInput'/>		  					
					  <div className='buttonMessage'>
					  <Button bsStyle='success' className='buttonMessage_two'> <Glyphicon glyph='send' /> </Button>
					  </div>
				</div>
				);
	}
};	