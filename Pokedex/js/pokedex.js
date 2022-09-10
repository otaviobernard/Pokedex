function fetchPokemon() {
    let nomePokemon = document.getElementById("txtBusca").value
    let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + nomePokemon
    fetch(getPokemonUrl)
        .then(response => response.json())
        .then(function(pokeData) {
            console.log(pokeData)
            document.getElementById('nomeaqui').innerHTML = `#${pokeData.name}`
            document.getElementById('imagem').src = pokeData.sprites.front_default;
            document.getElementById('numeroaqui').innerHTML = `#${pokeData.id}`
            types = pokeData.types.map(typeInfo => typeInfo.type.name)
            console.log(types)
            document.getElementById('naturesaqui').innerHTML = `${types.join(" | ")}`
        })
}

function fetchPokemonOnInitialize() {
    let rand = Math.floor(Math.random() * 905);
    let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/' + rand.toString()
    fetch(getPokemonUrl)
        .then(response => response.json())
        .then(function(pokeData) {
            console.log(pokeData)
            document.getElementById('nomeaqui').innerHTML = `#${pokeData.name}`
            document.getElementById('imagem').src = pokeData.sprites.front_default
            document.getElementById('numeroaqui').innerHTML = `#${pokeData.id}`
            types = pokeData.types.map(typeInfo => typeInfo.type.name)
            console.log(types)
            document.getElementById('naturesaqui').innerHTML = `${types.join(" | ")}`
        })
}

window.onload = fetchPokemonOnInitialize();