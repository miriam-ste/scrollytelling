document.addEventListener("scroll", function () {

    var graph2TitlesShown = inView("Overall-text") || inView("Alternative-text") || inView("Alternative-text") || inView("FDP-text") || inView("CDU-text") || inView("SPD-text") || inView("Linke-text") || inView("Green-text")

    if (!graph2TitlesShown) {
        document.getElementById("CDU-graph").style.opacity = 1;
        document.getElementById("SPD-graph").style.opacity = 1;
        document.getElementById("Left-graph").style.opacity = 1;
        document.getElementById("FDP-graph").style.opacity = 1;
        document.getElementById("Greens-graph").style.opacity = 1;
        document.getElementById("AFD-graph").style.opacity = 1;
        document.getElementById("Overall-graph").style.opacity = 1;

    }

    if (inView("Overall-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 1;
    }

    if (inView("Alternative-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 1;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }

    if (inView("FDP-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 1;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }

    if (inView("CDU-text")) {
        document.getElementById("CDU-graph").style.opacity = 1;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }

    if (inView("SPD-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 1;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }

    if (inView("Linke-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 1;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 0.15;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }

    if (inView("Green-text")) {
        document.getElementById("CDU-graph").style.opacity = 0.15;
        document.getElementById("SPD-graph").style.opacity = 0.15;
        document.getElementById("Left-graph").style.opacity = 0.15;
        document.getElementById("FDP-graph").style.opacity = 0.15;
        document.getElementById("Greens-graph").style.opacity = 1;
        document.getElementById("AFD-graph").style.opacity = 0.15;
        document.getElementById("Overall-graph").style.opacity = 0.15;
    }


    console.log("print", inViewHalf("Profession-text-body"))


    var graph3TitlesShown = inView("Gender-text") || inView("Age-text") || inView("Ethicity-text") || inView("Religion-text") || inView("Profession-text") || inView("MaritalStatus-text") || inView("Ableness-text") || inView("Sexuality-text") || inViewHalf("Profession-text-body")

    if (!graph3TitlesShown) {
        document.getElementById("Gender-graph").style.opacity = 1;
        document.getElementById("Age-graph").style.opacity = 1;
        document.getElementById("Ethnicity-graph").style.opacity = 1;
        document.getElementById("Religion-graph").style.opacity = 1;
        document.getElementById("MaritalStatus-graph").style.opacity = 1;
        document.getElementById("Profession-graph").style.opacity = 1;
        document.getElementById("Ableness-graph").style.opacity = 1;
        document.getElementById("Sexuality-graph").style.opacity = 1;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;
    }

    if (inView("Gender-text")) {
        document.getElementById("Gender-graph").style.opacity = 1;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 1;

    }

    if (inView("Age-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 1;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 1;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("Ethicity-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 1;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 1;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("Religion-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 1;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 1;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("MaritalStatus-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 1;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 1;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("Profession-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 1;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 1;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("Ableness-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 1;
        document.getElementById("Sexuality-graph").style.opacity = 0.15;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 1;
        document.getElementById("Highlight-Sexuality").style.opacity = 0;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("Sexuality-text")) {
        document.getElementById("Gender-graph").style.opacity = 0.15;
        document.getElementById("Age-graph").style.opacity = 0.15;
        document.getElementById("Ethnicity-graph").style.opacity = 0.15;
        document.getElementById("Religion-graph").style.opacity = 0.15;
        document.getElementById("MaritalStatus-graph").style.opacity = 0.15;
        document.getElementById("Profession-graph").style.opacity = 0.15;
        document.getElementById("Ableness-graph").style.opacity = 0.15;
        document.getElementById("Sexuality-graph").style.opacity = 1;
        document.getElementById("Highlight-MaritalStatus").style.opacity = 0;
        document.getElementById("Highlight-Age").style.opacity = 0;
        document.getElementById("Highlight-Ethnicity").style.opacity = 0;
        document.getElementById("Highlight-Religion").style.opacity = 0;
        document.getElementById("Highlight-Profession").style.opacity = 0;
        document.getElementById("Highlight-Ableness").style.opacity = 0;
        document.getElementById("Highlight-Sexuality").style.opacity = 1;
        document.getElementById("Highlight-Gender").style.opacity = 0;

    }

    if (inView("1949-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 1;
    }

    if (inView("1961-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 1;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("1987-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 1;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("1990-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 1;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("2005-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 1;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("2013-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 1;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("2017-text")) {
        document.getElementById("Year-2021").style.opacity = 0;
        document.getElementById("Year-2017").style.opacity = 1;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }

    if (inView("2021-text")) {
        document.getElementById("Year-2021").style.opacity = 1;
        document.getElementById("Year-2017").style.opacity = 0;
        document.getElementById("Year-2013").style.opacity = 0;
        document.getElementById("Year-2005").style.opacity = 0;
        document.getElementById("Year-1990").style.opacity = 0;
        document.getElementById("Year-1987").style.opacity = 0;
        document.getElementById("Year-1961").style.opacity = 0;
        document.getElementById("Year-1949").style.opacity = 0;
    }


})

function inView(id) {
    var object = document.getElementById(id);
    var y = object.getBoundingClientRect().y
    //console.log(object.getBoundingClientRect().y, window.innerHeight)
    if (y <= window.innerHeight && y > 0) {
        return true;
    } else {
        return false;
    }
}

function inViewHalf(id) {
    var object = document.getElementById(id);
    var y = object.getBoundingClientRect().y + ((object.getBoundingClientRect().bottom - object.getBoundingClientRect().y) / 2)
    //console.log(object.getBoundingClientRect().y, window.innerHeight)
    if (y <= window.innerHeight && y > 0) {
        return true;
    } else {
        return false;
    }
}