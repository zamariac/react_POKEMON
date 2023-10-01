const PokemonInfo = ({data}) => {
    return (
        <>  
            {

                (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.name} />
                    <div className="abilities">
                        {
                            data.abilities.map(pokemon => {
                                return (
                                    <>
                                        <div className="group">
                                            <h2>{pokemon.ability.name}</h2>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(pokemon => {
                                return (
                                    <>
                                        <h3>{pokemon.stat.name}:{pokemon.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
                )
            }
        </>
    )
}
export default PokemonInfo;