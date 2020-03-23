const { interval, timer } = require ('rxjs');

const interval$ = interval(4000, 1000);

interval$.subscribe(console.log);

// const timer$ = timer(2000, 1000);

// timer$.subscribe(console.log);

