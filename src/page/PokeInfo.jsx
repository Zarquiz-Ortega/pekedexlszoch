import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import PokeHeader from './PokeHeader'
import './styles/PokeInfo.css'

const PokeInfo = () => {

    const params = useParams()

    const [pokemon, getPokemo] = useFetch()

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
        getPokemo(url)

    }, [])

    //console.log(pokemon)

    return (
        <>
            <div>
                <PokeHeader />
            </div>
            <section className='pokeinfo__container' >
                <div className={`pokeinfo ${pokemon?.types[0].type.name}`}>
                    <div className='pokeinfo__back' ></div>
                    <figure className='pokeinfo__img'>
                        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon img" />
                    </figure>
                    <span className='pokeinfo__id' >#{pokemon?.id}</span>
                    <div className='section__name'>
                        <div className='pokeinfo__hr' />
                        <h2 className='pokeinfo__name' >{pokemon?.name}</h2>
                        <div className='pokeinfo__hr' />
                    </div>
                    <ul className='pokeinfo__data' >
                        <li className='pokeinfo__data-item'>
                            <span>Weight </span><span>{pokemon?.weight}</span>
                        </li>
                        <li className='pokeinfo__data-item' >
                            <span>Height </span><span>{pokemon?.height}</span>
                        </li>
                    </ul>
                    <div className='pokeinfo__type__skils'>
                        <article  >
                            <h3 className='pokeinfo__type__skils-name' >Type</h3>
                            <ul className='pokeinfo__type'>
                                {
                                    pokemon?.types.map(type => (
                                        <li className={`pokeinfo-item-${type.type.name}`} key={type.type.url} >
                                            {type.type.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </article>
                        <article >
                            <h3 className='pokeinfo__type__skils-name' >Skills</h3>
                            <ul className='pokeinfo__skills'>
                                {
                                    pokemon?.abilities.map(skill => (
                                        <li className='pokeinfo-item' key={skill.ability.url} >
                                            {skill.ability.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </article>
                    </div>
                    <div className='pokeinfo__stats' >
                        <div className='pokeinfo__stats-name' >
                            <h2 >Stats</h2>
                            <div></div>
                        </div>
                        <ul className='pokeinfo__stats-content'>
                            {
                                pokemon?.stats.map(stat => (
                                    <div>
                                        <li className='pokeinfo__stats-item' key={stat.stat.url} >
                                            <span>{stat.stat.name} </span>
                                            <span>{stat.base_stat}/150</span>
                                        </li>
                                        <div className='bar1'>
                                            <div className='bar2' style={{ width: `${(stat.base_stat / 150) * 100}%`}}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="pokeinfo__movements">
                    <h2>Movements</h2>
                    <ul className='pokeinfo__list'>
                        {
                            pokemon?.moves.map(move => (
                                <li className='pokeinfo__list-item' key={move.move.url} >
                                    {move.move.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PokeInfo