import alt from '../alt';
import matchAction from '../actions/matchAction';

class chatStore {
	constructor(){
		this.chat= [];

	this.bindListeners({
		handleAddchat: matchAction.ADD_MATCH
	});
	}

	handleAddchat(user){
		console.log('handleAddchat is running');
		this.chat.concat(user);
	}
}
export default alt.createStore(chatStore, 'chatStore');