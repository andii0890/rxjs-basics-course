const { fromEvent, interval } = require('rxjs');
const { debounceTime, pluck, distinctUntilChanged } = require('rxjs/operators');

//elems
const inputBox = document.getElementsById(
	'text-input'
);

//streams

const click$ = fromEvent(document, 'click');
const input$ = fromEvent(inputBox, 'keyup');

input$.pipe(
	debounce(()=> interval(1000)),
	pluck('target', 'value'),
	distinctUntilChanged()
	// ).subscribe(console.log);