/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
  let randomIndex = getRandomNumber(0, 2);
  let genres = ["drama", "fantasy", "comedy"];
  let randomGenre = genres[randomIndex];
  return randomGenre;

  // Another Approach
  /* randomNumber = getRandomNumber(0, 2);
  if (randomNumber == 0) {
    randomGenre = "drama";
  } else if (randomNumber == 1) {
    randomGenre = "fantasy";
  } else {
    randomGenre = "comedy";
  }
  return randomGenre; */
}

function displayRandomShow(genre) {
  if (genre == "random") {
    genre = chooseRandomGenre();
  } 

  let show;
  let randomIndex = getRandomNumber(0, 4);

  if (genre == "drama") {
    show = dramaShows[randomIndex];
  } else if (genre == "comedy") {
    show = comedyShows[randomIndex];
  } else {
    show = fantasyShows[randomIndex];
  }
  displayShow(show);
}



