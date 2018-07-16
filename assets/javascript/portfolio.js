$(document).ready(function () {
    var projects = [
        {
            name: "Hangman",
            image_ref: "assets/images/WordGuess.png",
            image_alt: "Word Guess Game",
            repo_url: "https://github.com/EricNg314/Word-Guess-Game",
            deployed_url: "https://ericng314.github.io/Word-Guess-Game/",
            tags: ["Show All", "Web Games", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
        },
        {
            name: "Kibble Collector",
            image_ref: "assets/images/Kibble-Collector.png",
            image_alt: "Unit 4 Game",
            repo_url: "https://github.com/EricNg314/unit-4-game",
            deployed_url: "https://ericng314.github.io/unit-4-game/",
            tags: ["Show All", "Web Games", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
        },
        {
            name: "Trivia",
            image_ref: "assets/images/Trivia.png",
            image_alt: "Trivia Game",
            repo_url: "https://github.com/EricNg314/TriviaGame",
            deployed_url: "https://ericng314.github.io/TriviaGame/",
            tags: ["Show All", "Web Games", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
        },
        {
            name: "Gif Loader",
            image_ref: "assets/images/Gif Loader.png",
            image_alt: "Gif Loader",
            repo_url: "https://github.com/EricNg314/GifTastic",
            deployed_url: "https://ericng314.github.io/GifTastic/",
            tags: ["Show All", "Web Games", "Entertainment", "API", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
        },
        {
            name: "Train Scheduler",
            image_ref: "assets/images/Train-Scheduler.png",
            image_alt: "Train Scheduler",
            repo_url: "https://github.com/EricNg314/Train_Scheduler",
            deployed_url: "https://ericng314.github.io/Train_Scheduler/",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"]
        },
        {
            name: "FoodTroverts",
            image_ref: "assets/images/FoodTrovert.png",
            image_alt: "FoodTroverts",
            repo_url: "https://github.com/EricNg314/Foodtroverts",
            deployed_url: "https://ericng314.github.io/Foodtroverts/",
            tags: ["Show All", "Entertainment", "API", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Google Firebase"]
        },
        {
            name: "Liri-Node-App",
            image_ref: "assets/images/Liri-Node-App.png",
            image_alt: "Liri a node application.",
            repo_url: "https://github.com/EricNg314/Liri-node-app",
            deployed_url: "",
            tags: ["Show All", "Entertainment", "API", "Javascript", "Node.js"]
        },
        {
            name: "Bamazon",
            image_ref: "assets/images/Bamazon.png",
            image_alt: "Bamazon a node application.",
            repo_url: "https://github.com/EricNg314/Bamazon",
            deployed_url: "",
            tags: ["Show All", "Javascript", "Node.js", "SQL"]
        },
        {
            name: "Match Pokemon Trainers",
            image_ref: "assets/images/Pokemon-Trainer-Finder.png",
            image_alt: "A pokemon match maker app.",
            repo_url: "https://github.com/EricNg314/Poke-Trainer-Finder",
            deployed_url: "https://powerful-mountain-82732.herokuapp.com/",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js"]
        },
        {
            name: "Pokemon-Catcher",
            image_ref: "assets/images/Pokemon-Catcher_v2.png",
            image_alt: "Pokemon Catcher with SQL.",
            repo_url: "https://github.com/EricNg314/Pokemon-Catcher",
            deployed_url: "https://damp-hollows-13291.herokuapp.com/",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Handlebars"]
        },
        {
            name: "Poke-Catcher-Sequelized",
            image_ref: "assets/images/Pokemon-Catcher_v2.png",
            image_alt: "Pokemon Catcher using Sequelize.",
            repo_url: "https://github.com/EricNg314/Poke-Catcher-Sequelized",
            deployed_url: "https://tranquil-sierra-89766.herokuapp.com/",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Sequelize", "Handlebars"]
        },
        {
            name: "Rent-All",
            image_ref: "assets/images/Rent-All.png",
            image_alt: "Rent-All Application",
            repo_url: "https://github.com/EricNg314/Rent-All",
            deployed_url: "https://enigmatic-shore-55514.herokuapp.com/",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "SQL", "Sequelize", "Handlebars"]
        },
        {
            name: "",
            image_ref: "",
            image_alt: "Job-Scraper Application",
            repo_url: "",
            deployed_url: "",
            tags: ["Show All", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Express.js", "Node.js", "MongoDB", "Handlebars"]
        },
        {
            name: "",
            image_ref: "",
            image_alt: "Kitten-Memory-Game-REACT Application",
            repo_url: "",
            deployed_url: "",
            tags: ["Show All", "HTML", "CSS", "Javascript", "Bootstrap", "Express.js", "Node.js", "React"]
        }
    ];

    var tagBtnList = ["Show All", "Web Games", "Entertainment", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "API", "Google Firebase", "Express.js", "Node.js", "SQL", "Sequelize", "MongoDB", "React", "Handlebars"];

    //Adding tag buttons.
    displayTagBtns(tagBtnList);

    //Adding projects to gallery.
    displayProjects(projects);


});

$(document).on("click", ".tag-btn", function (event) {

    console.log($(this).attr("data-tag"));
    // displayProjects(tag);
})

function displayTagBtns(tagBtnList) {
    $("#projectTags").empty();
    for (var i = 0; i < tagBtnList.length; i++) {
        var tagButton = $("<button>");
        tagButton.addClass("btn tag-btn my-1 mx-1 tag-style text-white btn-outline-light animated fadeIn");
        tagButton.attr("data-tag", tagBtnList[i]);
        tagButton.text(tagBtnList[i]);

        $("#projectTags").append(tagButton);
    }
}

function displayProjects(projects) {
    for (var i = 0; i < projects.length; i++) {
        //If statement to remove current placeholder projects.
        if (projects[i]["name"] !== "") {

            var projectDiv = $("<div>");
            projectDiv.addClass("col-sm-12 col-md-6 col-lg-4");

            var projectInfo = $("<div>");
            projectInfo.addClass("portfolioCard card mx-auto mb-4");

            var imageAnchor = $("<a>");
            imageAnchor.addClass("hvr-grow");
            imageAnchor.attr("href", projects[i]["repo_url"]);

            var imageTag = $("<img>");
            imageTag.addClass("card-img-top");
            imageTag.attr("src", projects[i]["image_ref"]);
            imageTag.attr("alt", projects[i]["image_alt"]);

            var imageTitleDiv = $("<div>");
            imageTitleDiv.addClass("card-body position-absolute px-0 py-2 imageText");

            var imageTitle = $("<h5>");
            imageTitle.addClass("card-title text-light text-center mb-0 py-3");
            imageTitle.text(projects[i]["name"]);

            var imageDeployAnchor = $("<a>");
            imageDeployAnchor.addClass("text-light");
            imageDeployAnchor.attr("href", projects[i]["deployed_url"]);
            if (projects[i]["deployed_url"] !== "") {
                imageDeployAnchor.text("Deployed Link: HERE.");
            } else {
                imageDeployAnchor.text("Deployed Link: Repo-only, application is command based.");
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


}
