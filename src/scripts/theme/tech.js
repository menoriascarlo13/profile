const tech = {
	init() {
		this.processArray(techListData);
	},
	processArray(data) {
		const techData = data;
		const techCardContainer = document.getElementById('js-tech-wrapper');

		Object.keys(techData).forEach(function (key) {
			techCardContainer.insertAdjacentHTML('beforeend', `
				<div id="tech-item-${techData[key].id}" class="tech-item" data-techId="${techData[key].id}" data-techName="${techData[key].techName}" 
				data-techLevel="${techData[key].techLevel}">
					<figure>
						<img alt="${techData[key].techName}" width="150" height="150" class="js-lazy" data-src="dist/images/images/${techData[key].techImage}">
					</figure>
					<p class="text-center h5 tech-title mb-0 d-none d-lg-block">${techData[key].techName}</p>
					<div class="tech-info text-center d-flex justify-content-center align-items-center">
						<div>
							<p class="tech-level-title h4">Skill Level</p>
							<p class="tech-level h4">${techData[key].techLevel}</p>
						</div>
					</div>
				</div>
			`);

			if (window.innerWidth < 768) {
				document.getElementById(`tech-item-${techData[key].id}`).addEventListener('click', (e) => {
					tech.modalMobile(e.target.dataset);
				});
			}

			if (key == techData.length - 1) {
				tech.slider();
			}
		});
	},
	slider() {
		const isPageDots = (window.innerWidth > 992) ? false : true;

		const flkty = new Flickity('.js-tech-wrapper', {
			wrapAround: true,
			pageDots: isPageDots,
			autoPlay: true,
			groupCells: true
		});
	},
	modalMobile(e) {
		console.log(e);
		const techModal = document.getElementById('js-modal');
		const techBody = document.getElementById('js-modal-body');
		const techTitle= document.getElementById('js-modal-label');
		try {
			if(techModal == null) {
				throw 'Missing modal element';
			}

			if(techBody == null) {
				throw 'Missing modal body element';
			}

			if(techTitle == null) {
				throw 'Missing modal title element';
			}

			techBody.innerHTML = `Skill Level: ${e.techlevel}`;
			techTitle.innerHTML = `${e.techname}`;

			const currentModal = new bootstrap.Modal(techModal, {
				keyboard: false
			})

			currentModal.show();
		} catch (error) {
			console.warn(error);
		}
	}
}

const techListData = [{
	"id": 1,
	"techName": "HTML5",
	"techLevel": "Advanced",
	"techImage": "html-5.png"
}, {
	"id": 2,
	"techName": "CSS3",
	"techLevel": "Advanced",
	"techImage": "css.png"
}, {
	"id": 3,
	"techName": "Bootstrap 4/5",
	"techLevel": "Advanced",
	"techImage": "bootstrap.png"
}, {
	"id": 4,
	"techName": "SASS",
	"techLevel": "Advanced",
	"techImage": "sass.png"
}, {
	"id": 5,
	"techName": "ES5",
	"techLevel": "Advanced",
	"techImage": "javascript.png"
}, {
	"id": 6,
	"techName": "jQuery",
	"techLevel": "Advanced",
	"techImage": "jquery-vertical.svg"
}, {
	"id": 7,
	"techName": "PHP",
	"techLevel": "Beginner",
	"techImage": "php.png"
}, {
	"id": 8,
	"techName": "VS Code",
	"techLevel": "Intermediate",
	"techImage": "visual-basic.png"
}, {
	"id": 9,
	"techName": "Github",
	"techLevel": "Intermediate",
	"techImage": "github.png"
}, {
	"id": 10,
	"techName": "Gulp",
	"techLevel": "Intermediate",
	"techImage": "gulp.png"
}, {
	"id": 11,
	"techName": "Git",
	"techLevel": "Intermediate",
	"techImage": "git.png"
}, {
	"id": 12,
	"techName": "Less",
	"techLevel": "Advanced",
	"techImage": "less.png"
}, {
	"id": 13,
	"techName": "React",
	"techLevel": "Beginner",
	"techImage": "react.png"
}, {
	"id": 14,
	"techName": "NPM",
	"techLevel": "Beginner",
	"techImage": "npm.png"
}, {
	"id": 15,
	"techName": "Wordpress",
	"techLevel": "Beginner",
	"techImage": "wordpress.png"
}, {
	"id": 16,
	"techName": "Webpack",
	"techLevel": "Beginner",
	"techImage": "webpack.png"
}, {
	"id": 17,
	"techName": "Photoshop",
	"techLevel": "Intermediate",
	"techImage": "ps.png"
}, {
	"id": 18,
	"techName": "Bulma",
	"techLevel": "Intermediate",
	"techImage": "bulma-logo.png"
}]