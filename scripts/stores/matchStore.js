import alt from '../alt';
import matchAction from '../actions/matchAction';
class matchStore {
	constructor() {
		this.match = [
		{name:'Emilia', age: '21', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img:'/images/flower5.jpg', id:'5'},
		{name:'Jenny', age:'19', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img: '/images/flower4.jpg', id:'4'},
		{name:'Emilia', age: '21', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img:'/images/flower1.jpg', id: '1'},
		{name:'Jenny', age:'19', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img: '/images/flower3.jpg', id: '4'}		
		];
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