function handleResponse(response) {
  console.log(response.data);
  const character = response.data[0];
  const box = document.getElementById;
}

let url = "https://hp-api.onrender.com/api/characters";
axios.get(url).then(handleResponse);
