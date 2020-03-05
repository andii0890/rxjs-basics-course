const { range } = require ('rxjs');
const { of } = require ('rxjs');

function hello() {
	return 'Hello world!';
}

const observer = {
	next: val => console.log('next', val),
	error: err => console.log('error', err),
	complete: () => console.log('complete')
};

const source$ = range(1,5);
const source2$ = of([1],2,3,4,5);


source$.subscribe(observer);
source2$.subscribe(observer);
console.log(hello());
