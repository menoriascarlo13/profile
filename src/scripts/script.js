window.addEventListener("load", () => {
	(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? document.body.classList.add('dark-theme') : document.body.classList.add('light-theme');
	util.loadingTime();
	nav.init();
	projectList.init();
	tech.init();
	imgLazy.init('load');
});