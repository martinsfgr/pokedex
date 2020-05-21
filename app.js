const fetchPokemons = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonPromises = []

  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i))
        .then(response => response.json())
    )
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        accumulator += `<li>${pokemon.name}</li>`
        return accumulator
      }, '')

      console.log(lisPokemons)
    })
}

fetchPokemons()
