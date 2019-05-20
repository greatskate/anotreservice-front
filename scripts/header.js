/*
This script handle all the logic begind the Header (See components/header.html).
*/
class Header {
	constructor() {
		console.log('[Header] Initializing script...');
		this.addLoadListener();
		this.addResizeListener();
	}

	addLoadListener = () => {
		window.addEventListener('load', this.resizeHandler);
	}

	addResizeListener = () => {
		window.addEventListener('resize', this.resizeHandler);
	}

	removeResizeListener = () => {
		window.removeEventListener('resize', this.resizeHandler);
	}

	resizeHandler = () => {
		this.generateLoginButton();
	}

	generateLoginButton = (width = document.body.offsetWidth) => {
		const loginElement = document.getElementById('login_button');
		if (!loginElement) {
			console.warn('[Header] Did not find login element. Might have a problem there.');
			return;
		}
		const loginElementChild = loginElement.querySelectorAll('i, div')[0];
		if (width >= 600 && (!loginElementChild || !loginElementChild.className || !loginElementChild.className.includes('button_container'))) {
			console.log('[Header] Generating login button...');
			const button = document.createElement('div');
			button.className = 'button_container button_container_raised';
			button.innerHTML = 'Se connecter';
			if (loginElementChild) {
				loginElement.replaceChild(button, loginElementChild)
			}
			else {
				loginElement.appendChild(button)
			}
		} else if (width < 600 && (!loginElementChild || !loginElementChild.className || !loginElementChild.className.includes('login_icon'))) {
			console.log('[Header] Generating login icon...');
			const icon = document.createElement('i');
			icon.className = 'material-icons login_icon';
			icon.innerHTML = 'lock_open';
			if (loginElementChild) {
				loginElement.replaceChild(icon, loginElementChild)
			} else {
				loginElement.appendChild(icon)
			}
		}
	}
}

const header = new Header();
