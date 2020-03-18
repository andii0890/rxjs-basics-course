const { fromEvent } = require('rxjs');
const { sampleTime, map } = require('rxjs/operators');

const click$ = fromEvent(document, 'click');

click$.pipe(
	sampleTime(4000),
	map(({clientX, clientY}) => ({
		clientX, clientY
	}))
).subscribe(console.log);