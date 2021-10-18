const main = {
	init() {
		util.platformDetector();
		util.themeSet();
		nav.init();
		projectList.init();
		tech.init();
		imgLazy.init('load');
	},
	resizeOnly() {

	},
	overall() {
		util.loadingTime(false);
		util.genericDeviceDetector(true);
		txtFit.init('js-banner-name', {
			widthOnly: true,
			maxFontSize: 60
		});
		scroller.init();
	}
}

window.addEventListener('load', () => {
	main.overall();
	main.init();

	window.addEventListener('resize', util.debounce(function () {
		main.overall();
		main.resizeOnly();
	}, 500));
});