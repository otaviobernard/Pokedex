function fetchPokemon(first, last) {
    let cont = first;
    let accumulator = "";
    while (cont <= last) {
        let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + cont.toString()

        fetch(getPokemonUrl)
            .then(response => response.json())
            .then(function(pokeData) {
                let types = pokeData.types.map(typeInfo => typeInfo.type.name)
                accumulator += `
            <li class="card ${types[0]}" >
            <img class="card-image alt="${pokeData.name}" src="${pokeData.sprites.front_default}"</img>
            <h2 class="card-title">#${pokeData.id}</h2>
            <h3 class="card-title">${pokeData.name}</h3>
            <h3 class="card-title">${types.join(" | ")}</h3>
            </li>
          `
                const ul = document.querySelector('[data-js="pokedex"]')
                ul.innerHTML = accumulator
            })
        cont = cont + 1
    }
}

function pokeFilter() {
    var filter = document.getElementById("combo").value;
    if (filter === "Kanto") {
        fetchPokemon(1, 151)
    } else if (filter === "Johto") {
        fetchPokemon(152, 251)
    } else if (filter === "Hoenn") {
        fetchPokemon(252, 386)
    } else if (filter === "Sinnoh") {
        fetchPokemon(387, 493)
    } else if (filter === "Unova") {
        fetchPokemon(494, 649)
    } else if (filter === "Kalos") {
        fetchPokemon(650, 721)
    } else if (filter === "Alola") {
        fetchPokemon(722, 809)
    } else {
        fetchPokemon(810, 905)
    }
}

function changeBackground(string) {
    if (string == "fire") {
        return "rgb(255, 176, 111)"
    } else if (string == "water") {
        return "#6369eb"
    } else if (string == "grass") {
        return "#72f2b4"
    }

}