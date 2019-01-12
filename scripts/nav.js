/* eslint-disable */
function initNav() {
	pages = document.getElementsByClassName('page');
	menus = document.getElementsByClassName('menu');
	for (let i = 0; i < menus.length; i += 1) {
		menus[i].addEventListener('click', eventClickShowPage);
	}
	showPage('home')
}

function eventClickShowPage() {
	showPage(this.dataset.page);
}
function showPage(page) {
	restorePages();
	let returnPage = null;
	// ⬇️ Changing nav icons' colors.
	if (menus && menus.length >= 1) {
		Array.from(menus).forEach((menu) => {
			if (!menu || !menu.dataset) {
				return false;
			}
			const { dataset: { page: menuPage } } = menu;
			const { childNodes } = menu;
			if (childNodes && childNodes.length >= 1) {
				return Array.from(childNodes).some((child) => {
					if (!child) {
						return false;
					}
					const { tagName } = child;
					// ⬇️ It's an icon!
					if (tagName === 'I') {
						child.style.color = page === menuPage ? '#2196f3' : '#3f3f3f';
						return true;
					}
					return false;
				})
			}
			return false;
		})
	}
	for (let i = 0; i < pages.length; i++) {
		if (page === pages[i].dataset.page) {
			pages[i].style.display = 'block';
			returnPage = pages[i];
		} else {
			pages[i].style.display = 'none';
		}
	}
	return returnPage
}
