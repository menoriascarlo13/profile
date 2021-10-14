const main = {
	init() {
		util.loadingTime();
		util.platformDetector();
		util.themeSet();
		nav.init();
		projectList.init();
		tech.init();
		imgLazy.init('load');
	},
	resize() {

	},
	overall() {
		util.genericDeviceDetector(false);
	}
}

window.addEventListener('load', () => {
	main.overall();
	main.init();

	window.addEventListener('resize', util.debounce(function () {
		main.overall();
		main.resize();
	}, 500));
});