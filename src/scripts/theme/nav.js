const nav = {
	init() {
		const navbar = document.getElementById('js-navbar');
		const header = document.getElementById('js-headers');
		let navbarHeight;
		try {
			if(navbar == null) {
				throw `nav.js: Missing Navigation Id / Element. Setting padding top of body to default. Removing fixed position setting of Navigation bar`;
			}

			if(header == null) {
				throw `nav.js: Missing Header Id / Element. Setting padding top of body to default. Removing fixed position setting of Header bar`;
			}
	
			navbarHeight = navbar.offsetHeight;
			document.body.style.paddingTop = `${navbarHeight}px`;
			navbar.classList.add('is-fixed');
			header.classList.add('is-fixed');
		} catch (error) {
			console.error(error);
			showError.init();
		}

		nav.navItem();
	},
	navItem() {
		const navItem = document.getElementsByClassName('js-nav-link');

		try {
			if(navItem.length == 0) {
				throw `nav.js: Missing Navigation Item Class / Element.`;
			}

			for (let i = 0; i < navItem.length; i++) {
				navItem[i].addEventListener('click', function(e) {
					nav.tabTitle(e);
				})
			 }

		} catch (error) {
			console.error(error);
			showError.init();
		}
	},
	tabTitle(e) {
		document.title = `JCPM - ${e.target.innerText}`;
	}
}