/*
This is empty on purpose! Your code to build the resume will go here.
 */
var taDescription = "Worked with Dr. Justin Williams for EN.570.495 Mathematical Foundations For Public \
Decision Making (12 students) and EN.570.496 Urban and Environmental Systems (21 students).\n\
Assessed written work and computer assignments.\n\
Taught workshops on use of Solver in Microsoft Excel and Gurobi optimizer.";

var work = {
	"jobs": [
				{
					"employer": "Johns Hopkins University",
					"title": "Teaching Assistant",
					"location": "Baltimore, MD",
					"dates": "September 2014 - May 2015",
					"description": taDescription
				}
	]
}

var projects = {
	"projects": [
					{
						"title": "About Me",
						"dates": "September 2015",
						"description": "Built a webpage about myself",
						"images": ["images/about_me.jpg"]
					},
					{
						"title": "Portfolio",
						"dates": "September 2015",
						"description": "Built a portfolio site",
						"images": ["images/portfolio.jpg"]
					}
	]
}

var bio = {
	"name": "Brody Chen",
	"role": "Web Developer",
	"contacts": {
		"email": "rufengch@gmail.com",
		"github": "dbhkhk",
		"location": "Daly City, CA"
	},
	"bioPic": "http://i.imgur.com/mnosDJ1.jpg",
	"welcomeMessage": "Welcome!",
	"skills": ["programming", "HTML", "CSS", "Python", "JavaScript"]
}

var education = {
	"schools": [
		{
			"name": "Johns Hopkins University",
			"location": "Baltimore, MD",
			"degree": "MS",
			"majors": ["Environmental Engineering"],
			"dates": "2013 - 2015",
			"url": "https://www.jhu.edu/"
		},
		{
			"name": "Tsinghua University",
			"location": "Beijing, China",
			"degree": "BS",
			"majors": ["Biological Sciences"],
			"dates": "2009 - 2013",
			"url": "http://www.tsinghua.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": "August 2015",
			"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		}
	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);

}

var displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();

$("#main").append(internationalizeButton);

var inName = function(name) {
	var newName = name.split(" ");
	console.log(newName);
	newName = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase() + " " +
	newName[1].toUpperCase();
	return newName;
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		for (var image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);