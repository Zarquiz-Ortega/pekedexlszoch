import React from 'react'
import './styles/PokeHeader.css'

const PokeHeader = () => {
    return (
        <header>
            <figure className='header__img' >
                <img src="../../assets/pokedex.png" alt="" />
            </figure>
            <div className='red'></div>
            <div className='black'></div>
            <div className="circulo1 header"></div>
            <div className="circulo2 header"></div>
        </header>
    )
}

export default PokeHeader