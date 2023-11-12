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

  const ancestry = randCharacter.ancestry;
  const characterAncestry = document.createElement("div");
  characterAncestry.innerHTML = ancestry;
  characterBox.appendChild(characterAncestry);

  const dateOfBirth = randCharacter.dateOfBirth;
  const characterBirthdate = document.createElement("div");
  characterBirthdate.innerHTML = dateOfBirth;
  characterBox.appendChild(characterBirthdate);
}

let url = "https://hp-api.onrender.com/api/characters";
axios.get(url).then(handleResponse);
