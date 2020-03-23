const { fromEvent } = require('rxjs');
const { take, map, first } = require('rxjs/operators');

const numbers$ = of(1,2,3,4,5);
const click$ = fromEvent(document, 'click');

click$.pipe(
	map(event => ({
		x: event.clientX,
		y: event.clientY
	})),

	//filter, take(1)
	first(({y}) => y > 200)
	// take(1)
	).subscribe({
		next: console.log,
		complete: () => console.log('complete!')
	});