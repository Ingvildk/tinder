import alt from '../alt';
import matchAction from '../actions/matchAction';

class chatStore {
	constructor(){
		this.chat = [];

	this.bindListeners({
		handleAddchat: matchAction.ADD_MATCH
	});
	}
	handleAddchat(user){
	var currentdate = new Date();
	currentdate = currentdate.getTime();		
	user['date'] = currentdate;
	this.chat = this.chat.concat([user]);
	}
}
export default alt.createStore(chatStore, 'chatStore');