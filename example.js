const { Observable }= require('rxjs')

// Import
// import { Observable } from 'rxjs';

// Desestructuring
// const rxjs = require('rxjs')
// const { Observable } = rxjs;

const observer = {
	next: value => console.log ('next', value),
	error: error => console.log('error', error),
	complete:() => console.log('complete!')	
};


const observable = new Observable(subscriber => {
	subscriber.next('Hello');
	subscriber.next('World');
	subscriber.complete();
	subscriber.next('Hello');
	subscriber.next('World');

});

observable.subscribe(
	value => console.log ('next', value),
	null,
	() => console.log('complete!')
	);
