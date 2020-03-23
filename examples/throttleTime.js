const { fromEvent } = require('rxjs');
const { debounceTime, throttleTime } = require('rxjs/operators');

//streams
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
	throttleTime(3000)
.subscribe(console.log));