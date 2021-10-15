const txtFit = {
	init(e, option) {
		if(option != null || option != undefined) {
			textFit(document.getElementsByClassName(e), option);
		}
	}
}