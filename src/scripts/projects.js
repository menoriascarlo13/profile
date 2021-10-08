const projectList = {
	init() {
		this.processArray(processListData);
	},
	processArray(data) {
		const projectData = data;
		const projectCardContainer = document.getElementById('js-project-cards');

		Object.keys(projectData).forEach(function(key) {
			projectCardContainer.insertAdjacentHTML('beforeend', `
				<div class="col-lg-4">
					<div id="project-item-${projectData[key].id}" class="project-card" 
					data-name="${projectData[key].projectName}" 
					data-id="${projectData[key].id}">
						<a href="${projectData[key].projectLink}" target="_blank">
							<figure class="project-image">
								<img src="dist/images/images/${projectData[key].projectImage}" alt="${projectData[key].projectName}">
							</figure>
						</a>
						<h3 class="project-name">${projectData[key].projectName}</h3>
						<p class="project-description">${projectData[key].projectDescription}</p>
					</div>
				</div>
			`);
		});
	}
}

const processListData = [{
	"id": 1,
	"projectName": "Nutrilett.se",
	"projectDescription": "Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",
	"projectLink": "https://www.nutrilett.se/",
	"projectYear": "2020",
	"projectImage": "nutrilett-se.png"
}, {
	"id": 2,
	"projectName": "Nutrilett.no",
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
}]