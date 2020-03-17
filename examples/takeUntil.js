const { interval, fromEvent } = require ('rxjs');
const { takeUntil } = require ('rxjs/operators');
const counter$ = interval(1000);
const click$ = fromEvent(document, 'click');

counter$.pipe(
	takeUntil(click$)
).subscribe(console.log);
