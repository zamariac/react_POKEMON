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

    const pokemonAPI = async() => {
        setLoading(true);
        const response=await axios.get(url);
        setNextUrl(response.data.next);
        setPreviousUrl(response.data.previous);
        getPokemon(response.data.results);
        setLoading(false);
    }

    const getPokemon=async(response) => {
        response.map(async(item) => {
            const result=await axios.get(item.url)
            // stores object in array, new array stores existing items, then add new items
            setPokemonData(state => {
                state=[...state,result.data]
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
                <Card pokemon={pokemonData} loading={loading}/>
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="right-content">
                <PokemonInfo/>
            </div>
        </div>
        </>
    )
}

export default Main;