import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hook/useFetch'
import PokeCard from './Pokedex/PokeCard'
import './styles/Pokedex.css'
import PokeSelect from './Pokedex/PokeSelect'
import PokeHeader from './PokeHeader'
import Pagination from './Pagination'


const Pokedex = () => {

    const [pokemons, getPokemons, getType, isLoading] = useFetch()
    const [selectValue, setSelectValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [page, setPage] = useState(1)

    const trainer = useSelector(store => store.trainer)

    useEffect(() => {
        if (selectValue) {
            getType(selectValue)
            setPage(1)
        } else {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=1302'
            getPokemons(url)
        }
    }, [selectValue,])

    const textInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue(textInput.current.value.toLowerCase().trim())
        textInput.current.value = ''
        setPage(1)
    }

    //paginations

    const quantity = 12
    const total = Math.ceil(pokemons?.results.length / quantity)

    const parts = () => {
        const last = quantity * page
        const first = last - quantity
        return pokemons?.results.slice(first, last)
    }

    const pokeSearch = (poke) => {
        const porName = poke.name.includes(inputValue)
        console.log(poke)
        return porName
    }


    //console.log(pokemons)

    return (
        <>
            <div>
                <PokeHeader />
            </div>
            <section className='pokedex' >
                <h2 className='pokedex__titel' ><span>Welcome {trainer} </span> here you can find your favorite pokemon  </h2>
                <div className='pokedex__form'>
                    <form className='pokedex__formulario' onSubmit={handleSubmit} >
                        <input className='pokedex__formulario-int' ref={textInput} type="text" />
                        <button lassName='pokedex__formulario-btn' >Search</button>
                    </form>
                    <PokeSelect
                        setSelectValue={setSelectValue}
                    />
                </div>
                {
                    isLoading ?
                        <h2>Loading...</h2>
                        :
                        <>
                            <div className='pokedex__container' >
                                {
                                    parts().filter(pokeSearch).map((poke) => (
                                        <PokeCard
                                            key={poke.url}
                                            url={poke.url}
                                        />
                                    ))
                                }
                            </div>
                            <div className='pokedex__pagination' >
                                {
                                    total > 1 &&
                                    <Pagination
                                        page={page}
                                        setPage={setPage}
                                        total={total}
                                    />
                                }
                            </div>
                        </>
                }
            </section>
        </>
    )
}

export default Pokedex