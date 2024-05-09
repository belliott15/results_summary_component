//Grabbing card container and data from data.json
const cardContainer = document.querySelector(".card-container");
const totalResult = document.querySelector("#total-result");
const dataArray = await fetch("data.json").then((resp) => resp.json());

const displayCards = () => {
  for (let card of dataArray) {
    //create elements
    const singleCard = document.createElement("div");
    const individual = document.createElement("span");
    const icon = document.createElement("img");
    const category = document.createElement("p");
    const score = document.createElement("p");

    //assign content for elements
    icon.src = card.icon;
    category.textContent = card.category;
    score.textContent = `${card.score}/100`;

    //assign class to elements
    singleCard.classList.add(`card`);
    singleCard.classList.add(card.category.toLowerCase());

    //append elements
    individual.append(icon, category);
    singleCard.append(individual, score);
    cardContainer.append(singleCard);
  }
  const button = document.createElement("button");
  button.textContent = "Continue";
  button.classList.add("button");
  cardContainer.append(button);
};

const calculateAverage = () => {
  const pointsAvailable = dataArray.length * 100;
  let totalPoints = 0;

  for (let data of dataArray) {
    const score = data.score;
    totalPoints += score;
  }
  console.log(Math.round((totalPoints / pointsAvailable) * 100));
  totalResult.textContent = Math.round((totalPoints / pointsAvailable) * 100);
};

// call display function
displayCards();
calculateAverage();
