const { fromEvent, interval } = require('rxjs');
const { mergeMap, takeUntil } = require('rxjs/operators');

const clicks$ = fromEvent(document, 'click');
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval(1000);

clicks$.pipe(
	mergeMap(() => interval$.pipe(
		takeUntil(mouseup$)
	))
).subscribe(console.log);