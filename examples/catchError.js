const { fromEvent, empty, interval } = require('rxjs');
const { ajax } = require ('rxjs/ajax');
const {
	debounceTime, 
	pluck,
	distinctUntilChanged,
	switchMap,
	catchError
} = require ('rxjs/operators');

const BASE_URL = 'https://api.openbrewerybd.org/breweries';

//elems
const inpuInbox = document.getElementById(
	'text-input'
);

const typeaheadContainer = document.getElementById
(
	'typeahead-container'
);

//streams
const input$ = fromEvent-(inpuInbox, 'keyup');

input$.pipe( 
	debounceTime(200),
	pluck('target', 'value'),
	distinctUntilChanged(),
	switchMap(searchTerm => {
		return ajax.getJSON(
			`${BASEURL}?by_name=${searchTerm}`
		).pipe(
			catchError(error => {
				//ignore
				return empty();
			}) 
		)
	})
).subscribe(response => {
	//update ui
	typeaheadContainer.innerHTML = response.map(
		b => b.name
	).join('<br>');
}) ;
