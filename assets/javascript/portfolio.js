$(document).ready(function () {
    // COMMENTED OUT: Using Serverless Framework to retrieve json object.
    // var projects = [
    //     {
    //         name: "Hangman",
    //         image_ref: "assets/images/project-images/WordGuess.png",
    //         image_alt: "Word Guess Game",
    //         repo_url: "https://github.com/EricNg314/Word-Guess-Game",
    //         deployed_url: "https://ericng314.github.io/Word-Guess-Game/",
    //         tags: ["Show All", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
    //     },
    //     {
    //         name: "Kibble Collector",
    //         image_ref: "assets/images/project-images/Kibble-Collector.png",
    //         image_alt: "Unit 4 Game",
    //         repo_url: "https://github.com/EricNg314/unit-4-game",
    //         deployed_url: "https://ericng314.github.io/unit-4-game/",
    //         tags: ["Show All", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
    //     },
    //     {
    //         name: "Trivia",
    //         image_ref: "assets/images/project-images/Trivia.png",
    //         image_alt: "Trivia Game",
    //         repo_url: "https://github.com/EricNg314/TriviaGame",
    //         deployed_url: "https://ericng314.github.io/TriviaGame/",
    //         tags: ["Show All", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
    //     },
    //     {
    //         name: "Gif Loader",
    //         image_ref: "assets/images/project-images/Gif-Loader.png",
    //         image_alt: "Gif Loader",
    //         repo_url: "https://github.com/EricNg314/GifTastic",
    //         deployed_url: "https://ericng314.github.io/GifTastic/",
    //         tags: ["Show All", "Entertainment", "API", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
    //     },
    //     {
    //         name: "Train Scheduler",
    //         image_ref: "assets/images/project-images/Train-Scheduler.png",
    //         image_alt: "Train Scheduler",
    //         repo_url: "https://github.com/EricNg314/Train_Scheduler",
    //         deployed_url: "https://ericng314.github.io/Train_Scheduler/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
    //     },
    //     {
    //         name: "FoodTroverts",
    //         image_ref: "assets/images/project-images/FoodTroverts_2.png",
    //         image_alt: "FoodTroverts",
    //         repo_url: "https://github.com/EricNg314/Foodtroverts",
    //         deployed_url: "https://ericng314.github.io/Foodtroverts/",
    //         tags: ["Show All", "Entertainment", "API", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Google Firebase"]
    //     },
    //     {
    //         name: "Liri-Node-App",
    //         image_ref: "assets/images/project-images/Liri-Node-App.png",
    //         image_alt: "Liri a node application.",
    //         repo_url: "https://github.com/EricNg314/Liri-node-app",
    //         deployed_url: "",
    //         tags: ["Show All", "Entertainment", "API", "Javascript", "Node.js"]
    //     },
    //     {
    //         name: "Bamazon",
    //         image_ref: "assets/images/project-images/Bamazon.png",
    //         image_alt: "Bamazon a node application.",
    //         repo_url: "https://github.com/EricNg314/Bamazon",
    //         deployed_url: "",
    //         tags: ["Show All", "Javascript", "Node.js", "SQL"]
    //     },
    //     {
    //         name: "Match Pokemon Trainers",
    //         image_ref: "assets/images/project-images/Pokemon-Trainer-Finder.png",
    //         image_alt: "A pokemon match maker app.",
    //         repo_url: "https://github.com/EricNg314/Poke-Trainer-Finder",
    //         deployed_url: "https://powerful-mountain-82732.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js"]
    //     },
    //     {
    //         name: "Pokemon-Catcher",
    //         image_ref: "assets/images/project-images/Pokemon-Catcher.png",
    //         image_alt: "Pokemon Catcher with SQL.",
    //         repo_url: "https://github.com/EricNg314/Pokemon-Catcher",
    //         deployed_url: "https://damp-hollows-13291.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Handlebars"]
    //     },
    //     {
    //         name: "Poke-Catcher-Sequelized",
    //         image_ref: "assets/images/project-images/Pokemon-Catcher.png",
    //         image_alt: "Pokemon Catcher using Sequelize.",
    //         repo_url: "https://github.com/EricNg314/Poke-Catcher-Sequelized",
    //         deployed_url: "https://tranquil-sierra-89766.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Sequelize", "Handlebars"]
    //     },
    //     {
    //         name: "Rent-All",
    //         image_ref: "assets/images/project-images/Rent-All.png",
    //         image_alt: "Rent-All Application",
    //         repo_url: "https://github.com/EricNg314/Rent-All",
    //         deployed_url: "https://enigmatic-shore-55514.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Sequelize", "Handlebars"]
    //     },
    //     {
    //         name: "Job-Scraper",
    //         image_ref: "assets/images/project-images/Job-Scraper.png",
    //         image_alt: "Job-Scraper Application",
    //         repo_url: "https://github.com/EricNg314/Job-Scraper",
    //         deployed_url: "https://radiant-everglades-91406.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "MongoDB", "Handlebars"]
    //     },
    //     {
    //         name: "Kitten Memory Game",
    //         image_ref: "assets/images/project-images/Kitten-Memory-Game-REACT.png",
    //         image_alt: "Kitten-Memory-Game-REACT Application",
    //         repo_url: "https://github.com/EricNg314/Kitten-Memory-Game-REACT",
    //         deployed_url: "https://ericng314.github.io/Kitten-Memory-Game-REACT/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "Bootstrap", "Express.js", "Node.js", "React"]
    //     },
    //     {
    //         name: "Career Deer",
    //         image_ref: "assets/images/project-images/Career-Deer.png",
    //         image_alt: "Career Deer Application",
    //         repo_url: "https://github.com/jimmytutron/career-deer",
    //         deployed_url: "https://careerdeer.herokuapp.com/",
    //         tags: ["Show All", "HTML", "CSS", "Javascript", "Bootstrap", "Express.js", "Node.js", "MongoDB", "React", "Redux"]
    //     }
    // ];


    var queryURL = "https://uwr1s5qnb4.execute-api.us-west-1.amazonaws.com/production/projects"

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(response);
        var projects = response["data"]

        var tagBtnList = ["Show All", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "API", "Google Firebase", "Express.js", "Node.js", "SQL", "Sequelize", "MongoDB", "React", "Redux", "Handlebars"];

        //Adding tag buttons.
        displayTagBtns(tagBtnList);
    
        //Adding projects to gallery.
        // displayProjects(projects);
        selectedTag(projects, "Show All");
    
        $(document).on("click", ".tag-btn", function (event) {
            $(".tag-btn").removeClass("active")
            var tag = $(this).attr("data-tag");
            $(this).addClass("active");
            // console.log($(this).attr("data-tag"));
            onLinkClick();
            selectedTag(projects, tag);
        })
    })

});

function onLinkClick(){
    document.getElementById('galleryID').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function displayTagBtns(tagBtnList) {
    $("#projectTags").empty();
    for (var i = 0; i < tagBtnList.length; i++) {
        var tagButton = $("<button>");
        tagButton.addClass("btn tag-btn my-1 mx-1 tag-style btn-outline-dark animated fadeIn");
        //Add active to the initial rendering of tag list.
        if (tagBtnList[i] === "Show All") {
            tagButton.addClass("active");
        }
        tagButton.attr("data-tag", tagBtnList[i]);
        tagButton.text(tagBtnList[i]);

        $("#projectTags").append(tagButton);
    }
}

function selectedTag(projects, tag) {
    $("#projectList").empty();
    for (var i = 0; i < projects.length; i++) {
        if (projects[i]["tags"].indexOf(tag) != -1) {
            displayProject(projects[i])
        }
    }
}


function displayProject(project) {
    //If statement to remove current placeholder projects.
    if (project["name"] !== "") {

        var projectDiv = $("<div>");
        projectDiv.addClass("col-sm-12 col-md-6 col-lg-6");

        var projectInfo = $("<div>");
        projectInfo.addClass("portfolioCard card mx-auto mb-4");

        var imageAnchor = $("<a>");
        imageAnchor.addClass("hvr-grow");
        imageAnchor.attr("href", project["repo_url"]);
        imageAnchor.attr("target", "_blank");

        var imageTag = $("<img>");
        imageTag.addClass("card-img-top");
        imageTag.attr("src", project["image_ref"]);
        imageTag.attr("alt", project["image_alt"]);

        var imageTitleDiv = $("<div>");
        imageTitleDiv.addClass("card-body position-absolute px-0 py-2 imageText");

        var imageTitle = $("<h5>");
        imageTitle.addClass("card-title text-light text-center mb-0");
        imageTitle.text(project["name"]);

        var imageDeployAnchor = $("<a>");
        imageDeployAnchor.addClass("text-light fz-14");
        imageDeployAnchor.attr("target", "_blank");
        imageDeployAnchor.attr("href", project["deployed_url"]);
        if (project["deployed_url"] !== "") {
            imageDeployAnchor.text("Deployed: CLICK HERE.");
        } else {
            imageDeployAnchor.text("Deployed: Repo-only, application is command based.");
            imageDeployAnchor.attr("href", project["repo_url"]);
        }

        projectDiv.append(projectInfo);
        projectInfo.append(imageAnchor);
        projectInfo.append(imageDeployAnchor);
        imageAnchor.append(imageTag);
        imageAnchor.append(imageTitleDiv);
        imageTitleDiv.append(imageTitle);

        $("#projectList").append(projectDiv);
    }
}


