import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import MatchStore from './stores/matchStore';
import MessageStore from './stores/messageStore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail, Glyphicon } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class IndividualChat extends React.Component {
	constructor(props) {
		super(props);
		this.state =MessageStore.getState();
	}

	componentWillMount() {
		var idChat = this.context.router.getCurrentParams().idChat;
		var users = userStore.getState();
		console.log(users);
		var contact = _.where(users, {id: idChat});
		var match = MatchStore.getState();
		var found = _.find(match), function(idChat){
			return('it exists');
		}
		if ( isNaN(found) ) {
			messageAction.addContact()
		}
		console.log(idChat);
		this.setState({id: idChat});
	}

	render() {
		console.log(this.state.id);
		return (
			<p>{this.state.id}</p>
			);
		}
};
IndividualChat.contextTypes = {
    router: React.PropTypes.func.isRequired
  };	