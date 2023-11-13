function handleResponse(response) {
  const character = response.data;
  console.log(character);
  var randCharacter = character[Math.floor(Math.random() * character.length)];
  console.log(randCharacter);

  const characterBox = document.getElementById("box");

  const characterName = randCharacter.name;
  const heading = document.createElement("h1");
  heading.innerHTML = characterName;
  characterBox.appendChild(heading);

  const characterImg = document.createElement("img");
  characterImg.src = randCharacter.image;
  characterBox.appendChild(characterImg);
  characterImg.onerror = function () {
    characterImg.src = "src/alternative.png";
    characterImg.height = 200;
    characterImg.width = 200;
  };

  const ancestry = randCharacter.ancestry;
  const characterAncestry = document.createElement("div");
  characterAncestry.innerHTML = ancestry;
  characterBox.appendChild(characterAncestry);

  const dateOfBirth = randCharacter.dateOfBirth;
  const characterBirthdate = document.createElement("div");
  characterBirthdate.innerHTML = dateOfBirth;
  characterBox.appendChild(characterBirthdate);

  const house = randCharacter.house;
  const charaterHouse = document.createElement("div");
  charaterHouse.innerHTML = house;
  characterBox.appendChild(charaterHouse);

  const species = randCharacter.species;
  const characterSpecis = document.createElement("div");
  characterSpecis.innerHTML = species;
  characterBox.appendChild(characterSpecis);
}

let url = "https://hp-api.onrender.com/api/characters";
axios.get(url).then(handleResponse);
