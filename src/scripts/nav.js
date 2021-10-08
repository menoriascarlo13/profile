const nav = {
	init() {
		let navbar = document.getElementById('js-navbar');
		let navbarHeight;
		try {
			if(navbar == null) {
				throw `Missing Navigation Id / Element. Setting padding top of body to default. Removing fixed position setting of Navigation bar`;
			}
	
			navbarHeight = navbar.offsetHeight;
			document.body.style.paddingTop = `${navbarHeight}px`;
			navbar.classList.add('is-fixed');
		} catch (error) {
			console.error(error);
		}
	}
}