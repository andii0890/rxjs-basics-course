const { of, from } = require ('rxjs');

function* hello() {
	yield 'Hello';
	yield 'World';
}

const iterator = hello();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

const observer = {
	next: val => console.log('next', val),
	error: err => console.log('error', err),
	complete: () => console.log('complete')
};

const source$ = from(iterator);



source$.subscribe(observer);
