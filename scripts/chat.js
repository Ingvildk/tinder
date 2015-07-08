import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ReactRouterBootstrap from 'react-router-bootstrap';
import Profile from './profile';
import userStore from './stores/userStore';
import matchAction from './actions/matchAction';
import matchStore from './stores/matchStore';
import userAction from './actions/userAction';
import chatStore from './stores/chatStore';
import _ from 'underscore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Input, Grid, Row, Col, Button, Thumbnail } = ReactBootstrap;
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
			chatStore.getState();
	}

	componentWillMount() {
		var newArray = [];
		var chat = this.state.chat;
		console.log(chat);
		var userId = this.context.router.getCurrentParams().userId;
		console.log(userId);
		console.log('Before corectUser function');
		var correctUser = function(chat) { return _.filter(chat, function(element){
				console.log(element.id);
				return (userId == element.id)
			});
		}
		console.log(correctUser() )		
		}

	render() {
		return(
			<div>
				{this.state.dict}
			</div>
			);
	}
};
Chat.contextTypes = {
    router: React.PropTypes.func.isRequired
  };