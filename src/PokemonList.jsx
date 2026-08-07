import React from 'react';
import './PokemonList.css';

export default function PokemonList({ id, name, image }) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-id">id: {id}</div>
            <div className="pokemon-image-container">
                <img src={image} alt={name} />
            </div>
            <div className="pokemon-name">Name: {name}</div>
        </div>
    );
}