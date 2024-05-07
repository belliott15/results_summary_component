//Grabbing card container and data from data.json
const cardContainer = document.querySelector(".card-container");
const dataArray = await fetch("data.json").then((resp) => resp.json());

const displayCards = () => {
  cardContainer.textContent = "";
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
    individual.classList.add(card.category.toLowerCase());
    singleCard.classList.add("card");

    //append elements
    individual.append(icon, category);
    singleCard.append(individual, score);
    cardContainer.append(singleCard);
  }
};

const calculateAverage = () => {
  const pointsAvailable = dataArray.length * 100;
  let totalPoints = 0;

  for (let data of dataArray) {
    const score = data.score;
    totalPoints += score;
  }
  console.log(Math.round((totalPoints / pointsAvailable) * 100));
};

// call display function
displayCards();
calculateAverage();
