import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Profile from './profile';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			users: ['Anniken', 'Ingvild']
		};
	}

	render() {
		return (
		<div className='home'>
		  <Grid>
		  	<br/>
		    <Row>
		    <Col xs={2} md={3}>
		    </Col>
		    <Col xs={8} md={7}>
		      <Thumbnail src='/images/girl.jpg' alt='450x350'>
		        <p className='name'><b>Anniken</b></p>
		        <Link to='Profile'><p>Bio</p></Link>
		        <p>
		          <Button bsStyle='success'>L i k e  !</Button>&nbsp;
		          <Button bsStyle='warning'>Sweip</Button>
		        </p>
		      </Thumbnail>
		    </Col>
		    <Col xs={2} md={2}>
		    </Col>
		    </Row>
		  </Grid>
		</div>    				
			);
	}

};