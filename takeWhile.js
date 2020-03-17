const { fromEvent } = require('rxjs');
const { take, map, takeWhile } = require('rxjs/operators');

const click$ = fromEvent(document, 'click');

click$.pipe(
	map(event => ({
		x: event.clientX,
		y: event.clientY
	})),
	takeWhile(({y}) => y < 200, true)
	).subscribe({
		next: console.log,
		complete: () => console.log('complete!')
	});