const { fromEvent, interval } = require('rxjs');
const { switchMap } = require('rxjs/operators');


const interval$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
	switchMap(()=> interval$)
).subscribe(console.log);
