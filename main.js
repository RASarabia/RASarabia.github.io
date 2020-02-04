const api = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: Math.floor(Math.random() * 801)+1,
}

const generateHtml = data => {
    const html = `
        <div class="name">Your Pokemon Companion  for the Day is ${data.name}!</div>
        <img src=${data.sprites.front_default} width=180px height=180px> 
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

const {url, type, id} = api
const apiURL = `${url}${type}/${id}`

fetch(apiURL)
    .then( (data) => data.json())
    .then( (pokemon) => generateHtml(pokemon))

