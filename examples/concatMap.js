const { fromEvent, interval } = require('rxjs');
const { concatMap, take } = require('rxjs/operators');


const interval$ = interval(1000);
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
	concatMap(()=> interval$.pipe(take(3)))
).subscribe(console.log);
