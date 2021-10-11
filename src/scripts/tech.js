const tech = {
	init() {
		this.processArray(techListData);
	},
	processArray(data) {
		const techData = data;
		const techCardContainer = document.getElementById('js-tech-wrapper');

		Object.keys(techData).forEach(function(key) {
			techCardContainer.insertAdjacentHTML('beforeend', `
				<div id="tech-item-${techData[key].id}" class="tech-item" data-techId="${techData[key].id}" data-techName="${techData[key].techName}">
					<figure>
						<img src="dist/images/images/${techData[key].techImage}" alt="${techData[key].techName}">
					</figure>
					<div class="tech-info text-center d-flex justify-content-center align-items-center">
						<p class="tech-description d-none">${techData[key].techDescription}</p>
						<p class="tech-level h4">Skill Level: ${techData[key].techLevel}</p>
					</div>
				</div>
			`);

			if(key == techData.length - 1) {
				tech.slider();
			}
		});
	},
	slider() {
		const flkty = new Flickity('.js-tech-wrapper', {
			freeScroll: true,
			wrapAround: true,
			pageDots: false,
			autoPlay: true,
			groupCells: true
		});
	}
}

const techListData = [{
	"id": 1,
	"techName": "HTML5",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "html-5.png"
}, {
	"id": 2,
	"techName": "CSS3",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "css.png"
}, {
	"id": 3,
	"techName": "Bootstrap 4/5",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "bootstrap.png"
}, {
	"id": 4,
	"techName": "SASS",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "sass.png"
}, {
	"id": 5,
	"techName": "ES5",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "javascript.png"
}, {
	"id": 6,
	"techName": "jQuery",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "jquery-vertical.svg"
}, {
	"id": 7,
	"techName": "PHP",
	"techDescription": "Sample",
	"techLevel": "Beginner",
	"techImage": "php.png"
}, {
	"id": 8,
	"techName": "VS Code",
	"techDescription": "Sample",
	"techLevel": "Intermediate",
	"techImage": "visual-basic.png"
}, {
	"id": 9,
	"techName": "Github",
	"techDescription": "Sample",
	"techLevel": "Intermediate",
	"techImage": "github.png"
}, {
	"id": 10,
	"techName": "Gulp",
	"techDescription": "Sample",
	"techLevel": "Intermediate",
	"techImage": "gulp.png"
}, {
	"id": 11,
	"techName": "Git",
	"techDescription": "Sample",
	"techLevel": "Intermediate",
	"techImage": "git.png"
}, {
	"id": 12,
	"techName": "Less",
	"techDescription": "Sample",
	"techLevel": "Advanced",
	"techImage": "less.png"
}, {
	"id": 13,
	"techName": "React",
	"techDescription": "Sample",
	"techLevel": "Beginner",
	"techImage": "react.png"
}, {
	"id": 14,
	"techName": "NPM",
	"techDescription": "Sample",
	"techLevel": "Beginner",
	"techImage": "npm.png"
}, {
	"id": 15,
	"techName": "Wordpress",
	"techDescription": "Sample",
	"techLevel": "Beginner",
	"techImage": "wordpress.png"
}, {
	"id": 16,
	"techName": "Webpack",
	"techDescription": "Sample",
	"techLevel": "Beginner",
	"techImage": "webpack.png"
}, {
	"id": 17,
	"techName": "Photoshop",
	"techDescription": "Sample",
	"techLevel": "Intermediate",
	"techImage": "ps.png"
}
]