import alt from '../alt';

class messageStore {
	constructor() {
		this.Emilia = [
			{name: 'Emilia', date:'01/01/2011 10:20:45', message:'Hi ', img: '/images/flower5.jpg', id: '5'},
			{name: 'Ali', date: '04/02/2011 12:34:59', message: 'You must beasdfghjklsdfghj kjhgfdsdfghjsasdfghj kllllllllllllll lllllllllllll lllallalalalaalko ijuycxedfg h '},
			{name: 'Emilia', date: '01/01/2011 5:10:10', message: 'How are you?'}, 
			{name: 'Emilia', date:'01/01/2011 10:20:45', message:'Hi ', img: '/images/flower5.jpg', id: '5'},
			{name: 'Ali', date: '04/02/2011 12:34:59', message: 'You must be?'},
			{name: 'Emilia', date: '01/01/2011 5:10:10', message: 'How are you?'}			
		];
		this.Jenny = [
			{name: 'Emilia', date:'01/01/2011 10:20:45', message:'Hi'},
			{name: 'Ali', date: '04/02/2011 12:34:59', message: 'You must be '},
			{name: 'Emilia', date: '01/01/2011 5:10:10', message: 'How are you?'}
		];
	}
}
export default alt.createStore(messageStore, 'messageStore');
