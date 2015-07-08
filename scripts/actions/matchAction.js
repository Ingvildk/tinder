import alt from '../alt';
/*import matchChanger from '../utils/matchChanger.js'; */

class matchAction {
	console.log('matchAction is running')
	addMatch(user) {
		this.dispatch(user);
/*		matchChanger.addMatch(user); */
	}
}
export default alt.createActions(matchAction);