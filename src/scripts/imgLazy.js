const imgLazy = {
	init(status) {
		const myLazyLoad = new LazyLoad({
			elements_selector: '.js-lazy',
			data_src: 'src'
		});
		if(status == 'loadAll') {
			imgLazy.loadLazy(myLazyLoad);
		}

		if(status == 'update') {
			imgLazy.updateALL(myLazyLoad);
		}
	},
	logElementEvent(eventName, element) {
		console.log(Date.now(), eventName, element.getAttribute("data-src"));
	},
	callback_loading(element) {
		imgLazy.logElementEvent("loading", element);
	},
	callback_loaded(element) {
		imgLazy.logElementEvent("loaded", element);
	},
	loadLazy(e) {
		e.loadAll();
	},
	updateALL(e) {
		e.update();
	}
}