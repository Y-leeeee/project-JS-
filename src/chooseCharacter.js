function handleResponse(response) {
  const characters = response.data;
  console.log(characters);

  const shuffledCharacters = shuffleArray(characters);

  const characterBox = document.getElementById("box");

  for (let i = 0; i < Math.min(shuffledCharacters.length, 10); i++) {
    const randCharacter = shuffledCharacters[i];

    const characterName = randCharacter.name;
    const heading = document.createElement("h1");
    heading.innerHTML = characterName;
    characterBox.appendChild(heading);

    const characterImg = document.createElement("img");
    characterImg.src = randCharacter.image;
    characterBox.appendChild(characterImg);
    characterImg.onerror = function () {
      characterImg.src = "src/dobby.gif";
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
    const characterHouse = document.createElement("div");
    characterHouse.innerHTML = house;
    characterBox.appendChild(characterHouse);

    const species = randCharacter.species;
    const characterSpecies = document.createElement("div");
    characterSpecies.innerHTML = species;
    characterBox.appendChild(characterSpecies);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let url = "https://hp-api.onrender.com/api/characters";
axios.get(url).then(handleResponse);
