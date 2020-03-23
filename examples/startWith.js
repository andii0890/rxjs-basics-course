// import { of } from 'rxjs';
// import { startWith, endWith } from 'rxjs/operators';

// const numbers$ = of(1,2,3);

// numbers$.pipe( 
// 	startWith('a','b','c'),
// 	endWith('a', 'b', 'c')
// .subscribe(console.log));

import { interval, fromEvent, concat } from 'rxjs';
import { scan, mapTo, tap, takeUntil, startWith, takeWhile, count} from 'rxjs/operators';

//elems
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const abortButton = document.getElementById('abort');

//streams
const counter$ = interval(1000);
const abortClick$ = fromEvent(abortButton, 'click');

const COUNTDOWN_FROM = 10;

counter$.pipe(
	mapTo(-1),
	scan((accumulator, current) => {
		return accumulator + current;
	}, COUNTDOWN_FROM),
	takeWhile(value => value > 0),
	takeUntil(abortClick$),
	startWith(COUNTDOWN_FROM),
).subscribe(value => {
	countdown.innerHTML = value;
	if(!value) {
		message.innerHTML = 'Liftoff!';
	}
});
