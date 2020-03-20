import { interval, concat } from 'rxjs';
import { startWith } from 'rxjs/operators';

const interval$ = interval(1000);
const delayed$ = empty().pipe(delay(1000));

// concat(
// 	interval$.pipe(take(3)),
// 	interval$.pipe(take(2))
// ).subscribe(console.log);

delayed$.pipe(
	concat(
		delayed$.pipe(startWith('3...')),
		delayed$.pipe(startWith('2...')),
		delayed$.pipe(startWith('1...')),
		delayed$.pipe(startWith('Go!...'))
	), 
	startWith('Get Ready!')
).subscribe(console.log)