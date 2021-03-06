var bio = {
	"name": "Brody Chen",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(510) 888-6666",
		"email": "rufengch@gmail.com",
		"github": "dbhkhk",
		"twitter": "@dbhkhk",
		"location": "Daly City, CA"
	},
	"bioPic": "images/head_200_200.jpg",
	"welcomeMessage": "Welcome to my resume!<br>If you have any questions, please don't hesitate to contact me" +
	" :)",
	"skills": ["Programming", "HTML", "CSS", "JavaScript", "Python"],
	"display": function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName, formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedPic, formattedWelcome, HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};
 

bio.display();


var work = {
	"jobs": [
				{
					"employer": "Johns Hopkins University",
					"title": "Teaching Assistant",
					"location": "Baltimore, MD",
					"dates": "September 2014 - May 2015",
					"description": "Worked with Dr. Justin Williams for EN.570.495 Mathematical " +
					"Foundations For Public " +
					"Decision Making (12 students) and EN.570.496 Urban and Environmental Systems (21 students). " +
					"Assessed written work and computer assignments. " +
					"Taught workshops on use of Solver in Microsoft Excel and Gurobi optimizer."
				}
	],
	"display": function() {
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
		}
	}
};

work.display();


var projects = {
	"projects": [
					{
						"title": "About Me",
						"dates": "September 2015",
						"description": "Built a webpage about myself",
						"images": ["images/about_me_500.jpg"],
						"url": "http://dbhkhk.github.io/p0-about-me/"
					},
					{
						"title": "Portfolio",
						"dates": "September 2015",
						"description": "Built a portfolio site",
						"images": ["images/portfolio_500.jpg"],
						"url": "http://dbhkhk.github.io/portfolio/"
					}
	],
	"display": function() {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedTitle = formattedTitle.replace("#", projects.projects[project].url)
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();


var education = {
	"schools": [
		{
			"name": "Johns Hopkins University",
			"location": "Baltimore, MD",
			"degree": "MS",
			"majors": ["Environmental Engineering"],
			"dates": 2015,
			"url": "https://www.jhu.edu/"
		},
		{
			"name": "Tsinghua University",
			"location": "Beijing, China",
			"degree": "BS",
			"majors": ["Biological Sciences"],
			"dates": 2013,
			"url": "http://www.tsinghua.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
		},
		{
			"title": "How to use Git and GitHub",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775-nd"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804-nd"
		},
		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/intro-to-jquery--ud245-nd"
		}
	],
	"display": function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation, formattedMajor);
		}

		$("#education").append(HTMLonlineClasses);

		for (var onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLonlineStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[onlineCourse].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			formattedURL = formattedURL.replace("#", education.onlineCourses[onlineCourse].url);
			$(".online-entry:last").append(formattedTitleSchool, formattedDate, formattedURL);
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);