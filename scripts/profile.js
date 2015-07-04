import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var { Route, DefaultRoute, RouteHandler, Link } = Router;


export default class Profile extends React.Component {
	render() {
		return (
		<div className='profile'>
		<Link to='Home'><Button>Back</Button></Link>
		  <Grid>
		  	<br/>
		    <Row>
		    <Col xs={2} md={3}>
		    </Col>
		    <Col xs={8} md={7}>
		      <Thumbnail src='/images/girl.jpg' alt='450x350'>
		        <p className='name'><b>Anniken</b></p>
		        <p>Det tidligere ladestedet ligger ved Oslofjorden, og fjordarmen Sonsbukta, lokalt kjent som Sonskilen, er fjordens dypeste naturlige havn. Son ligger 50 kilometer fra Oslo og grenser mot Moss og Østfold fylke i sør, og mot Hølen tettsted i nord. Son sentrum ligger nede ved sjøen, med resten av det tidligere tettstedet i en bratt helning bak. Son har ca. 4000 innbyggere og er en del av </p>
		      </Thumbnail>
		    </Col>
		    <Col xs={2} md={2}>
		    </Col>
		    </Row>
			  <Row>
			  <Col xs={6} md={3}>
			    <Thumbnail href='#' alt='171x180' src='/images/flower4.jpg' />
			  </Col>
			  <Col xs={6} md={3}>
			    <Thumbnail href='#' alt='171x180' src='/images/flower3.jpg' />
			  </Col>
			  <Col xs={6} md={3}>
			    <Thumbnail href='#' alt='171x180' src='/images/flower4.jpg' />
			  </Col>
			  <Col xs={6} md={3}>
			    <Thumbnail href='#' alt='171x180' src='/images/flower3.jpg' />
			  </Col>			  
			  </Row>		    
		  </Grid>
		</div>
		);
	}
}