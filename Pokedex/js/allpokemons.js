let cont = 1;
let accumulator = "";
while (cont <= 151) {
    let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + cont.toString()

    fetch(getPokemonUrl)
        .then(response => response.json())
        .then(function(pokeData) {
            console.log(pokeData.name)
            accumulator += `
            <li class="card">
            <img class="card-image alt="${pokeData.name}" src="${pokeData.sprites.front_default}"</img>
              <h2 class="card-title">#${pokeData.id}  ${pokeData.name}</h2>
            </li>
          `
            console.log(accumulator)
            const ul = document.querySelector('[data-js="pokedex"]')
            ul.innerHTML = accumulator

        })
    cont = cont + 1
}