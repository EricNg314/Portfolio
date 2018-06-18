$(document).ready(function () {

    var projects = [
        {
            name: "Hangman",
            image_ref: "assets/images/WordGuess.png",
            image_alt: "Word Guess Game",
            repo_url: "https://github.com/EricNg314/Word-Guess-Game",
            deployed_url: "https://ericng314.github.io/Word-Guess-Game/"
        },
        {
            name: "Kibble Collector",
            image_ref: "assets/images/Kibble-Collector.png",
            image_alt: "Unit 4 Game",
            repo_url: "https://github.com/EricNg314/unit-4-game",
            deployed_url: "https://ericng314.github.io/unit-4-game/"
        },
        {
            name: "Trivia",
            image_ref: "assets/images/Trivia.png",
            image_alt: "Trivia Game",
            repo_url: "https://github.com/EricNg314/TriviaGame",
            deployed_url: "https://ericng314.github.io/TriviaGame/"
        },
        {
            name: "Gif Loader",
            image_ref: "assets/images/Gif Loader.png",
            image_alt: "Gif Loader",
            repo_url: "https://github.com/EricNg314/GifTastic",
            deployed_url: "https://ericng314.github.io/GifTastic/"
        },
        {
            name: "Train Scheduler",
            image_ref: "assets/images/Train-Scheduler.png",
            image_alt: "Train Scheduler",
            repo_url: "https://github.com/EricNg314/Train_Scheduler",
            deployed_url: "https://ericng314.github.io/Train_Scheduler/"
        },
        {
            name: "FoodTroverts",
            image_ref: "assets/images/FoodTrovert.png",
            image_alt: "FoodTroverts",
            repo_url: "https://github.com/EricNg314/Foodtroverts",
            deployed_url: "https://ericng314.github.io/Foodtroverts/"
        },
        {
            name: "Liri-Node-App",
            image_ref: "assets/images/Liri-Node-App.png",
            image_alt: "Liri a node application.",
            repo_url: "https://github.com/EricNg314/Liri-node-app",
            deployed_url: "https://github.com/EricNg314/Liri-node-app"
        },
        {
            name: "Bamazon",
            image_ref: "assets/images/Bamazon.png",
            image_alt: "Bamazon a node application.",
            repo_url: "https://github.com/EricNg314/Bamazon",
            deployed_url: ""
        },
        {
            name: "Match Pokemon Trainers",
            image_ref: "assets/images/Pokemon-Trainer-Finder.png",
            image_alt: "A pokemon match maker app.",
            repo_url: "https://github.com/EricNg314/Poke-Trainer-Finder",
            deployed_url: "https://powerful-mountain-82732.herokuapp.com/"
        },
        {
            name: "Pokemon-Catcher",
            image_ref: "assets/images/Pokemon-Catcher.png",
            image_alt: "Pokemon Catcher with SQL.",
            repo_url: "https://github.com/EricNg314/Pokemon-Catcher",
            deployed_url: "https://damp-hollows-13291.herokuapp.com/"
        },
        {
            name: "Poke-Catcher-Sequelized",
            image_ref: "assets/images/Pokemon-Catcher.png",
            image_alt: "Pokemon Catcher using Sequelize.",
            repo_url: "https://github.com/EricNg314/Poke-Catcher-Sequelized",
            deployed_url: "https://tranquil-sierra-89766.herokuapp.com/"
        },
        {
            name: "",
            image_ref: "",
            image_alt: "",
            repo_url: "",
            deployed_url: ""
        }
    ];

    for (var i = 0; i < projects.length; i++) {
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





});