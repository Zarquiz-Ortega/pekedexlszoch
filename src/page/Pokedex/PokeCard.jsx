import React, { useEffect } from 'react'
import useFetch from '../../hook/useFetch'
import { useNavigate } from 'react-router-dom'
import './Style/PokeCard.css'

const PokeCard = ({ url }) => {

    const [pokemon, getPokemon, _getType, isLoading] = useFetch()
    const navigate = useNavigate()

    useEffect(() => {
        getPokemon(url)
    }, [])

    const handelPokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    //console.log(pokemon)

    return (
        <>
        {
            isLoading?
                <p>Loading card...</p>
            :
            <article onClick={handelPokemon} className={`pokecard ${pokemon?.types[0].type.name}`} >
            <div className='pokecard__back' ></div>
            <figure className='pokecard__img'>
                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon img" />
            </figure>
            <h3 className='pokecard__name'> {pokemon?.name} </h3>
            <ul className='pokecard__types' >
                {
                    pokemon?.types.map(type => (
                        <li className={`slot${type.slot}`} key={type.type.url} >
                            {type.type.name}
                        </li>
                    ))
                }
            </ul>
            <span>Type</span>
            <hr  className='pokecard__hr' />
            <ul className='pokecard__stats'>
                {
                    pokemon?.stats.map(stat => (
                        !stat.stat.name.includes('-') &&
                        <li key={stat.stat.url} >
                            <span>{stat.stat.name}</span>
                            <span className='pokecard__stat-item' >{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
        }
        </>
    )
}

export default PokeCard