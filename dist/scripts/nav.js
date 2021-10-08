


window.addEventListener("load", () => {
    let navbar = document.getElementById('js-navbar');
    let navbarHeight;
    try {
        // navbar = document.getElementById('js-navbar');
        if(navbar == null) {
            throw `Missing Navigation ID. Setting padding top of body to default`;
        }
        navbarHeight = navbar.offsetHeight;
        console.log(navbar);
    } catch (error) {
        console.warn(error);
        navbar = 'sample';
        navbarHeight = 56;
        console.log(navbar);
        console.log(navbarHeight);
    } 
});

window.addEventListener("scroll",function(){
    console.log('tae');
});