import React from "react";
import {useNavigate} from "react-router-dom"


const Pokemon = (props) => {
    const pokemon = props.pokemon;

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/detail/${pokemon.id}`; 
        navigate(path);
    }

    return (
    <button className="pokemon-card" onClick={routeChange}>
        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    </button>)
}

export default Pokemon;