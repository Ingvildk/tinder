import alt from '../alt';
import userAction from '../actions/userAction';
import matchStore from '../stores/matchStore';
import matchAction from '../actions/matchAction';

class userStore {
	constructor() {
		this.user = [
		{name:'Anniken', age: '21', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img:'/images/flower2.jpg', id:'2'},
		{name:'Victoria', age:'19', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img: '/images/flower3.jpg', id:'3'},
		{name:'Mariell', age:'19', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img: '/images/flower6.jpg', id: '6'},
		{name:'Emilia', age: '21', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img:'/images/flower5.jpg', id:'5'},
		{name:'Jenny', age:'19', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img: '/images/flower4.jpg', id:'4'},
		{name:'Emilia', age: '21', bio:'Shepard was born 4/11/2154, is a graduate of the N7 special forces program (service no. 5923-AC-2826),', img:'/images/flower1.jpg', id: '1'}
		];
		this.errorMessage = null;
		this.count = 0;
		this.match = matchStore.getState();
	
	this.bindListeners({
		handleAddcount: userAction.ADD_COUNT,
		handleAddmatch: matchAction.ADD_MATCH
	});
	}
	handleAddcount(value) {
		this.count = value;
		this.errorMessage = null;
	}
	handleAddmatch() {
		this.match = matchStore.getState();
	}
}
export default alt.createStore(userStore, 'userStore');