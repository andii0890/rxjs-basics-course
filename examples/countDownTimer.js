const { interval } = require ('rxjs');
const { scan, mapTo, filter } = require ('rxjs/operators');

//elem refs
const countdown = document.getElementsById(
	'message'
);

//streams
const counter$ = interval(1000);

counter$.pipe(
	mapTo(-1),
	scan((accumulator, current) => {
		return accumulator + current;
	}, 10),
	filter(value => value > 0)
).subscribe(value => {
	countdown.innerHTML = value;
	if(!value) {
		message.innerHTML = 'Liftoff!';
	}
});

