// import {fromEvent, merge } from 'rxjs';

// const keyup$ = fromEvent(documen,'keyup');
// const click$ = fromEvent(document, 'click');

// // keyup$.subscribe(console.log)
// // keyclick$.subscribe(console.log)


import { interval, fromEvent, merge, empty } from 'rxjs';
import { scan, mapTo, tap, switchMap, takeUntil, startWith, takeWhile, count, retry} from 'rxjs/operators';

//elems
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const pauseBottom = document.getElementById('pause');
const startBottom = document.getElementById('start');

//streams
const counter$ = interval(1000);
const pauseClick$ = fromEvent(pauseButton, 'click');
const startClick$ = fromEvent(startButton, 'click');

const COUNTDOWN_FROM = 10;

merge(
	startClick$.pipe(mapTo(true)),
	pauseClick$.pipe(mapTo(false)),
).pipe(
	switchMap( shouldStart => {
		return shouldStart ? counter$ : empty()}),
	mapTo(-1),
	scan((accumulator, current) => {
		return accumulator + current;
	}, COUNTDOWN_FROM),
	takeWhile(value => value > 0),
	startWith(COUNTDOWN_FROM),
).subscribe(value => {
	countdown.innerHTML = value;
	if(!value) {
		message.innerHTML = 'Liftoff!';
	}
});
