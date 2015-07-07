import alt from '../alt';

class messageAction {
	addMessage(message) {
		this.dispatch(message);
	}
}
export default alt.createActions(messageAction);