import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;

export default class Profile extends React.Component {
	render() {
		return (
				<div>
					<Grid>
					  <Row>
					  <Col xs={6} md={3}>
					    <Thumbnail href='#' alt='171x180' src='/images/flower1.jpg' />
					  </Col>
					  <Col xs={6} md={3}>
					    <Thumbnail href='#' alt='171x180' src='/images/flower2.jpg' />
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