window.addEventListener("load", () => {
    let navbar = document.getElementById('js-navbar');
    let navbarHeight;
    try {
        // navbar = document.getElementById('js-navbar');
        if(navbar == null) {
            throw `Missing Navigation ID. Setting padding top of body to default.
			Removing fixed position setting of Navigation bar`;
        }
        navbarHeight = navbar.offsetHeight;
		document.body.style.paddingTop = `${navbarHeight}px`;
		navbar.classList.add('is-fixed');
    } catch (error) {
		console.warn(error);
        console.log(navbar);
        console.log(navbarHeight);
    }

	
});

// window.addEventListener("scroll",function(){
//     console.log('tae');
// });