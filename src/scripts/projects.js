const projectList = {
	init() {
		this.processArray(projectListData);
	},
	processArray(data) {
		const projectData = data;
		const projectCardContainer = document.getElementById('js-project-cards');

		Object.keys(projectData).forEach(function(key) {
			projectCardContainer.insertAdjacentHTML('beforeend', `
				<div class="col-12 col-md-6 col-lg-4">
					<div id="project-item-${projectData[key].id}" class="project-card" 
					data-name="${projectData[key].projectName}" 
					data-id="${projectData[key].id}">
						<a href="${projectData[key].projectLink}" target="_blank">
							<figure class="project-image">
								<img src="dist/images/images/${projectData[key].projectImage}" alt="${projectData[key].projectName}">
							</figure>
						</a>
						<h3 class="project-name">${projectData[key].projectName}</h3>
						<p class="project-description js-project-description">${projectData[key].projectDescription}</p>
					</div>
				</div>
			`);

			if(key == projectData.length - 1) {
				projectList.truncateData();
			}
		});
	},
	truncateData() {
		new Cuttr('.js-project-description', {
			//options here
			truncate: 'words',
			length: 17
		});
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
}
]