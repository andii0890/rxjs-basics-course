const { fromEvent } = require('rxjs');
const { auditTime } = require('rxjs/operators');

const click$ = fromEvent(document, 'click');

click$.pipe(
	auditTime(4000),
).subscribe(console.log);