/* eslint-disable */


function initScrollListener() {
	mainHeader = document.getElementById('mainHeader');
	title = document.getElementById('title');
	buttonLogin = document.getElementsByClassName('login')[0];
	agenda = document.getElementById('agenda');
	scroll = 0;
	window.addEventListener('scroll', handleScrollEvent);
}

function getIntermediateValue(minValue, maxValue, accordingTo) {
	const value = maxValue - ((maxValue-minValue)*(accordingTo/100));
	if (value < minValue) {
		return minValue;
	}
	if (value > maxValue) {
		return maxValue;
	}
	return value;
}

function handleScrollEvent() {
	const { scrollY: scrollTop } = window;
	mainHeader.style.height = `${getIntermediateValue(50, 75, scrollTop)}px`;
	title.style['font-size'] = `${getIntermediateValue(15, 17.5, scrollTop)}px`;
}

function restorePages() {
	for (let i = 0; i < pages.length; i += 1) {
		pages[i].scrollTop = 0;
	}
}
