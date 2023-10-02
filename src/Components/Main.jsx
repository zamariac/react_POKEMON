import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";

const Main = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); 
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    const [pokemonIndex, setPokemonIndex] = useState();

    const pokemonAPI = async() => {
        setLoading(true);
        const response=await axios.get(url);
        setNextUrl(response.data.next);
        setPreviousUrl(response.data.previous);
        getPokemon(response.data.results);
        setLoading(false);
        // console.log(response.data.results)
    }

    const getPokemon=async(response) => {
        response.map(async(item) => {
            const result=await axios.get(item.url)
            // stores object in array, new array stores existing items, then add new items
            setPokemonData(state => {
                state=[...state,result.data]
                state.sort((a,b)=> a.id > b.id ? 1 : -1)
                return state;
            })

        })
    }

    useEffect(() => {
        pokemonAPI();
    },[url])
    
    return (
        <>
        <div className="container">
            <div className="left-content">
                <Card pokemon={pokemonData} loading={loading} infoPokemon={pokemon=>setPokemonIndex(pokemon)}/>
                <div className="btn-group">
                    {
                        previousUrl && <button onClick={()=>{
                            setPokemonData([])
                        setUrl(previousUrl)
                    }}>Previous
                    </button>}

                    { 
                        nextUrl && <button onClick={()=>{
                        setPokemonData([])
                        setUrl(nextUrl)
                    }}>Next
                    </button>}
                </div>
            </div>
            <div className="right-content">
                <PokemonInfo data={pokemonIndex}/>
            </div>
        </div>
        </>
    )
}

export default Main;