const projectListLimit = 6;
const projectCardContainer = document.getElementById('js-project-cards');
let newLimit = 0;
let previousLimit = 0;
let addLoadMoreOnce = true;

const projectList = {
	init() {
		this.initialProcess(projectListData);
	},
	initialProcess(data) {
		projectList.insertElement(projectCardContainer, projectListLimit, false, projectListData);
	},
	loadMore() {
		const loadMoreBtn = document.getElementById('js-load-more');

		try {
			if (loadMoreBtn == null) {
				throw 'Missing load more button. Loading more function will not work and some of the ';
			}

			newLimit = projectListLimit;
			loadMoreBtn.addEventListener('click', function () {
				newLimit = newLimit + projectListLimit;
				previousLimit = previousLimit + projectListLimit;
				console.log(`
					new limit: ${newLimit},
					previousLimit limit: ${previousLimit},
				`);
				projectList.insertElement(projectCardContainer, newLimit, true, projectListData);
			});
		} catch (err) {
			console.warn(err);
		}
	},
	truncateData() {
		const projectDescription = document.getElementsByClassName('js-project-description');

		try {
			if (projectDescription.length == 0) {
				throw 'Missing Project Description element';
			}

			new Cuttr('.js-project-description', {
				//options here
				truncate: 'words',
				length: 17
			});
		} catch (err) {
			console.warn(err);
		}
	},
	insertElement(container, limit, isLoadMore, data) {
		try {
			if (container == null) {
				throw 'Portfolio Section: missing project container element or id. Hiding Portfolio Section for now';
			}

			if (data == null) {
				throw 'Portfolio Section: missing or undefined data. Hiding Portfolio Section for now';
			}

			if (data.length == 0) {
				throw 'Portfolio Section: Data Empty. Hiding Portfolio Section for now';
			}

			Object.keys(data).forEach(function (key) {
				if (!isLoadMore) {
					if (key < limit) {
						console.log(`Condition: ${key < limit}`);
						container.insertAdjacentHTML('beforeend', `
						<div class="col-12 col-md-6 col-lg-4 project-item-container">
							<div id="project-item-${data[key].id}" class="project-card" 
							data-name="${data[key].projectName}" 
							data-id="${data[key].id}">
								<a href="${data[key].projectLink}" target="_blank">
									<figure class="project-image">
										<img src="dist/images/images/${data[key].projectImage}" alt="${data[key].projectName}">
									</figure>
								</a>
								<div class="project-description-wrapper">
									<h3 class="project-name">${data[key].projectName}</h3>
									<p class="project-description js-project-description">${data[key].projectDescription}</p>
								</div>
							</div>
						</div>
					`);
					}
				} else {
					if (key >= previousLimit && key < limit) {
						container.insertAdjacentHTML('beforeend', `
						<div class="col-12 col-md-6 col-lg-4 project-item-container">
							<div id="project-item-${data[key].id}" class="project-card" 
							data-name="${data[key].projectName}" 
							data-id="${data[key].id}">
								<a href="${data[key].projectLink}" target="_blank">
									<figure class="project-image">
										<img src="dist/images/images/${data[key].projectImage}" alt="${data[key].projectName}">
									</figure>
								</a>
								<div class="project-description-wrapper">
									<h3 class="project-name">${data[key].projectName}</h3>
									<p class="project-description js-project-description">${data[key].projectDescription}</p>
								</div>
							</div>
						</div>
					`);
					}
				}

				if (key == data.length - 1) {
					if (data.length > limit) {
						if (addLoadMoreOnce) {
							container.insertAdjacentHTML('afterend', `
							<div class="text-center" id="js-load-more-container">
								<button id="js-load-more" class="btn btn-loadMore text-uppercase">
									Load More
								</button>
							</div>
						`);

							projectList.loadMore();
						}

						addLoadMoreOnce = false;
					}

					projectList.truncateData();
				}
			});
		} catch (err) {
			console.warn(err);
		}
	}
}

const projectListData = [{
	"id": 1,
	"projectName": "Nutrilett SE",
	"projectDescription": "Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",
	"projectLink": "https://www.nutrilett.se/",
	"projectYear": "2020",
	"projectImage": "nutrilett-se.png"
}, {
	"id": 2,
	"projectName": "Nutrilett NO",
	"projectDescription": "Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",
	"projectLink": "https://www.nutrilett.no/",
	"projectYear": "2021",
	"projectImage": "nutrilett-no.png"
}, {
	"id": 3,
	"projectName": "Möllers Global",
	"projectDescription": "Möller’s brand is Norway’s number 1 omega-3 brand*",
	"projectLink": "https://www.mollers.com/",
	"projectYear": "2019",
	"projectImage": "mollers-global.png"
}, {
	"id": 4,
	"projectName": "Möllers NO",
	"projectDescription": "Möller’s brand is Norway’s number 1 omega-3 brand*",
	"projectLink": "https://www.mollers.no/",
	"projectYear": "2021",
	"projectImage": "mollers-no.png"
}, {
	"id": 5,
	"projectName": "Jordan",
	"projectDescription": "Jordan is a Scandinavian brand that has been caring for people’s teeth since 1927. Our range of high quality, easy-to-use and stylish products are designed for every stage of your life, making sure you will find one that fits you.",
	"projectLink": "https://www.jordanoralcare.com/",
	"projectYear": "2020",
	"projectImage": "jordan.png"
}, {
	"id": 6,
	"projectName": "Grand Frank",
	"projectDescription": "Grand Frank is an E-commerce Website for Men Apparel, Essentials, Shirts, Tailoring, Trousers, etc",
	"projectLink": "https://www.grandfrank.com/",
	"projectYear": "2020",
	"projectImage": "gf.png"
}, {
	"id": 7,
	"projectName": "Maximsports NO",
	"projectDescription": "Maxim is the first sports nutrition series launched in Europe, covering products for every stage of sports performance. Maxim's products are perfect for both top athletes and fitness enthusiasts. The product range is very wide and you are sure to find a suitable option, whatever your species.",
	"projectLink": "https://www.maximsport.no/",
	"projectYear": "2020",
	"projectImage": "maxim-no.png"
}, {
	"id": 8,
	"projectName": "Nutrilett SE",
	"projectDescription": "Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",
	"projectLink": "https://www.nutrilett.se/",
	"projectYear": "2020",
	"projectImage": "nutrilett-se.png"
}, {
	"id": 9,
	"projectName": "Nutrilett NO",
	"projectDescription": "Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",
	"projectLink": "https://www.nutrilett.no/",
	"projectYear": "2021",
	"projectImage": "nutrilett-no.png"
}, {
	"id": 10,
	"projectName": "Möllers Global",
	"projectDescription": "Möller’s brand is Norway’s number 1 omega-3 brand*",
	"projectLink": "https://www.mollers.com/",
	"projectYear": "2019",
	"projectImage": "mollers-global.png"
}, {
	"id": 11,
	"projectName": "Möllers NO",
	"projectDescription": "Möller’s brand is Norway’s number 1 omega-3 brand*",
	"projectLink": "https://www.mollers.no/",
	"projectYear": "2021",
	"projectImage": "mollers-no.png"
}, {
	"id": 12,
	"projectName": "Jordan",
	"projectDescription": "Jordan is a Scandinavian brand that has been caring for people’s teeth since 1927. Our range of high quality, easy-to-use and stylish products are designed for every stage of your life, making sure you will find one that fits you.",
	"projectLink": "https://www.jordanoralcare.com/",
	"projectYear": "2020",
	"projectImage": "jordan.png"
}, {
	"id": 13,
	"projectName": "Grand Frank",
	"projectDescription": "Grand Frank is an E-commerce Website for Men Apparel, Essentials, Shirts, Tailoring, Trousers, etc",
	"projectLink": "https://www.grandfrank.com/",
	"projectYear": "2020",
	"projectImage": "gf.png"
}, {
	"id": 14,
	"projectName": "Maximsports NO",
	"projectDescription": "Maxim is the first sports nutrition series launched in Europe, covering products for every stage of sports performance. Maxim's products are perfect for both top athletes and fitness enthusiasts. The product range is very wide and you are sure to find a suitable option, whatever your species.",
	"projectLink": "https://www.maximsport.no/",
	"projectYear": "2020",
	"projectImage": "maxim-no.png"
}]