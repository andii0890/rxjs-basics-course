import { combineLatest, fromEvent, of } from 'rxjs';
import { map, filter, delay, mergeMap, tap, share } from 'rxjs/operators';
import {
	calculateMortgage
} from './mortgageCalculator';

const loanAmount = document.getElementById('loanAmount');
const interest = document.getElementById('interest');
const loanLength = document.querySelectorAll('.loanLength');
const expected = document.getElementById('expected');

//helpers
const createInputValueStream = elem => {
	return fromEvent(elem, 'input').pipe(
		map(event => parseFloat(event.target.value))
	)
};

const saveResponse = mortageAmount => {
	return of(mortageAmount).pipe(
		delay(1000)
	)
}

//streams
const interest$ = createInputValueStream(interest);
const loanLength$ = createInputValueStream(loanLength);
const loanAmount$ = createInputValueStream(loanAmount);

const calculation$ = combineLatest(
	interest$,
	loanAmount$,
	loanLength$
).pipe(
	map(([interest, loanAmount, loanLength]) => {
		return calculateMortgage(
			interest, loanAmount, loanLength
		)
	}),
	tap(console.log),
	filter(mortageAmount => !isNaN(mortageAmount)),
	share()
)
calculation$.subscribe(mortageAmount => {
	expected.innerHTML = mortageAmount;
});

calculation$.pipe(
	mergeMap(mortageAmount => saveResponse(
		mortageAmount
	))
)