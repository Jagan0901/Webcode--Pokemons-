const expected_Pokemons = +50;

const displayPokemon = async() =>{
    for(let i=1; i<=expected_Pokemons;i++){
        await getPokemon(i);
    }
}



const getPokemon = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const data = await fetch(url,{method:"GET"});    //https://pokeapi.co/api/v2/pokemon/1
    const pokemon_Data = await data.json();
    console.log(pokemon_Data)
    pokemon_Card(pokemon_Data);
}
displayPokemon()    

function pokemon_Card(pokemon_Data){    
    const abilities_length = pokemon_Data.abilities.length;
    console.log(abilities_length)

    const moves_length = pokemon_Data.moves.length;
    console.log(moves_length);

    
const poke_name = pokemon_Data.name.charAt(0).toUpperCase()+pokemon_Data.name.slice(1);
console.log(poke_name);
  
var ability_arr = [];
for (let i=0; i<abilities_length; i++) {
  abilityss = pokemon_Data.abilities[i].ability.name
  ability_arr.push(abilityss)

}
console.log(ability_arr);


const poke_abilities = ability_arr.join(',')
console.log(poke_abilities)






let moves_arr = [];
for(let i=0; i<moves_length; i++){
move = pokemon_Data.moves[i].move.name
moves_arr.push(move);
}
const poke_moves = moves_arr.join(`,`)
console.log(poke_moves)





const poke_weigth = `${pokemon_Data.weight}kg`;
console.log(poke_weigth)


const poke_Images = pokemon_Data.sprites.front_shiny;






const all_Pokemons = document.createElement('div');

try {
const pokemon_Details = `<div class ="poke-container">
<img class="poke-pic" src= "${poke_Images}" alt="">
<div>
    <h2 class="poke-name">Name: ${poke_name}</h2>
    <p class="poke-ability">Abilities: ${poke_abilities}</p>
    <br>
    <p class="poke-move">Moves: ${poke_moves}</p>
    <br>
    <p class="poke-weight">Weight: ${poke_weigth}</p>
</div>
</div>
`;


all_Pokemons.innerHTML = pokemon_Details;
document.body.appendChild(all_Pokemons);
} catch (err){
    console.log(err)
}
}


