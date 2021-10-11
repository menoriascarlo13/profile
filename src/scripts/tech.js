const tech = {
	init() {
		let flkty = new Flickity('.js-tech-wrapper', {
			freeScroll: true,
			wrapAround: true,
			pageDots: false,
			autoPlay: 1500
		});

		console.log(flkty);
	}
}