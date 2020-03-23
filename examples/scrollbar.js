const { fromEvent } = require('rxjs');
const { map } = require('rxjs/operators');
// streams

//helpers
function calculateScrollPercent(element) {
	const {
		scrollTop,
		scrollHeight,
		clientHeight
	} = element;

	return(scrollTop / (scrollHeight - clientHeight))* 100
}

//elems
const progressBar = document.querySelector(
	'.progress-bar'
);
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
	// percent progress
map(({target}) => calculateScrollPercent(
	target.documentElement))
);

scroll$.subscribe(console.log)
progress$.subscribe(percent => {
	progressBar.style.width = `${percent}%`; 
});