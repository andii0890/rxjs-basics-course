const { from } = ('rxjs');
const { reduce, scan, map } = ('rxjs/operators')

const numbers = [1,2,3,4,5];
const user = [
	{name: 'Brian', loggedIn: false, token: null },
	{name: 'Brian', loggedIn: true, token: 'abc' },
	{name: 'Brian', loggedIn: true, token: '123' },
]

from(numbers).pipe(
	scan((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0)
).subscribe(console.log);

from(user).pipe(
	scan((accumulator, currentValue) => {
		return {...accumulator, ...currentValue};
	}, {})
).subscribe(console.log);

const state$ = from(user).pipe(
	scan((accumulator, currentValue) => {
		return {...accumulator, ...currentValue};
	}, {})
)

const name$ = state$.pipe(
	map(state => state.name)
);

name$.subscribe(console.log);