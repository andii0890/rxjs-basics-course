const { of, fromEvent } = require ('rxjs');
const { map, pluck, mapTo } = require ('rxjs/operators');

// of(1,2,3,4,5).pipe(
// 	map(value => value * 10)
// ).subscribe(console.log)

const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(
	map(event => event.code)
);
const keycodeWithPluck$ = keyup$.pipe(
	pluck('code')
);
const pressed$ = keyup$.pipe(
	mapTo('Key pressed!')
)
keyup$.subscribe(console.log);
keycode$.subscribe(console.log);
keycodeWithPluck$.subscribe(console.log);
pressed$.subscribe(console.log);
