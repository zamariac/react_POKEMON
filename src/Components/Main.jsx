import React from "react";
import Card from "./Card";
import PokemondData from "./PokemonData";


const Main = () => {
    return (
        <>
        <div className="container">
            <div className="left-content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="right-content">
                <PokemondData/>
            </div>
        </div>
        </>
    )
}

export default Main;