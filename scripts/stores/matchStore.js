import alt from '../alt';
import matchAction from '../actions/matchAction';
class matchStore {
	constructor() {
		this.match = [];
		this.errorMessage = null;
	
	this.bindListeners({
		handleAdduser: matchAction.ADD_MATCH
	});
	}

	handleAdduser(user) {
		this.match = this.match.concat(user);
		this.errorMessage = null;
	}

}
export default alt.createStore(matchStore, 'matchStore');
/* PROBLEM: jeg faar ikke bindListener til å fungere. addHandler runner ikke*/