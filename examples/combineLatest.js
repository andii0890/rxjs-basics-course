import { fromEvent, combineLatest, from, interval } from 'rxjs';
import {map, filter,withLatestFrom } from 'rxjs/operators';
//elems
const first = document.getElementById('first');
const second = document.getElementById('second');

//streams
const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

//helpers
const keyupAsValue = elem =>  {
	return fromEvent(elem, 'keyup').pipe(
		map(event => event.target.kyeupAsNumbers)
	)
};

click$.pipe(
	withLatestFrom(interval(1000))
).subscribe(console.log)

combineLatest(
	keyupAsValue(first),
	keyupAsValue(second)
).pipe(
	filter(([first,second]) => {
		return !isNaN(first) && !isNaN(second);
	}), map(([first, second]) => first + second)
).subscribe(console.log);