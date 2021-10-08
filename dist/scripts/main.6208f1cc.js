const nav={init(){let t=document.getElementById("js-navbar"),e=document.getElementById("js-header");var i;try{if(null==t)throw"Missing Navigation Id / Element. Setting padding top of body to default. Removing fixed position setting of Navigation bar";if(null==e)throw"Missing Header Id / Element. Setting padding top of body to default. Removing fixed position setting of Header bar";i=t.offsetHeight,document.body.style.paddingTop=`${i}px`,t.classList.add("is-fixed"),e.classList.add("is-fixed")}catch(t){console.error(t)}}};
const projectList={init(){this.processArray(processListData)},processArray(e){const t=e,r=document.getElementById("js-project-cards");Object.keys(t).forEach(function(e){r.insertAdjacentHTML("beforeend",`
				<div class="col-lg-4">
					<div id="project-item-${t[e].id}" class="project-card" 
					data-name="${t[e].projectName}" 
					data-id="${t[e].id}">
						<a href="${t[e].projectLink}" target="_blank">
							<figure class="project-image">
								<img src="dist/images/images/${t[e].projectImage}" alt="${t[e].projectName}">
							</figure>
						</a>
						<h3 class="project-name">${t[e].projectName}</h3>
						<p class="project-description">${t[e].projectDescription}</p>
					</div>
				</div>
			`)})}},processListData=[{id:1,projectName:"Nutrilett.se",projectDescription:"Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",projectLink:"https://www.nutrilett.se/",projectYear:"2020",projectImage:"nutrilett-se.png"},{id:2,projectName:"Nutrilett.no",projectDescription:"Nutrilett is a proven effective method for weight loss and contains all the necessary vitamins, proteins, minerals that the body needs",projectLink:"https://www.nutrilett.no/",projectYear:"2021",projectImage:"nutrilett-no.png"},{id:3,projectName:"Möllers Global",projectDescription:"Möller’s brand is Norway’s number 1 omega-3 brand*",projectLink:"https://www.mollers.com/",projectYear:"2019",projectImage:"mollers-global.png"},{id:4,projectName:"Möllers NO",projectDescription:"Möller’s brand is Norway’s number 1 omega-3 brand*",projectLink:"https://www.mollers.no/",projectYear:"2021",projectImage:"mollers-no.png"}];
window.addEventListener("load",()=>{nav.init(),projectList.init()});