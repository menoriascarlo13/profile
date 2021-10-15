const txtFit = {
	init(e, option) {
		console.log(option);
		if(option != null || option != undefined) {
			console.log(option);
			textFit(document.getElementsByClassName(e), option);
		}
	}
}