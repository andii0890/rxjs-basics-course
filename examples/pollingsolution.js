import { fromEvent, timer } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { takeUntil, pluck, mergeMapTo, exhaustMap, tap, finalize, switchMapTo } from "rxjs/operators";

// elems 
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage = document.getElementById('dog');

//streams 
const startClick$ = fromEvent(
	startButton, 'click'
);
const stopclick$ = fromEvent(
	stopButton, 'click'
);

startClick$.pipe(
	//map to interval
	exhaustMap(timer(0, 5000).pipe(
		tap(()=> pollingStatus.innerHTML = 'Active'),
		switchMapTo(
			ajax.getJSON(
				'https://random.dog/woof.json'
			).pipe(
				pluck('url')
			)
		),
		takeUntil(stopclick$),
		finalize(() => pollingStatus.innerHTML = 'Stopped')
	))
).subscribe(curl => dogImage.src = url);