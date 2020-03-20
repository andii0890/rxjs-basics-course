const { fromEvent, interval } = require('rxjs');
const { exhaustMap, take } = require('rxjs/operators');


const interval$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
	exhaustMap(()=> interval$.pipe(take(3)))
).subscribe(console.log);
