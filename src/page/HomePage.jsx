import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './styles/HomePage.css'

const HomePage = () => {

    const textInput = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setTrainer(textInput.current.value.trim()))
        textInput.current.value = ''
        navigate('/pokedex')
    }

    return (
        <>
            <div className='home__container' >
                <figure className='home__img' >
                    <img src="../../assets/pokedex.png" alt="" />
                </figure>
                <h1 className='home__title' >Hi Trainer</h1>
                <h4 className='home__subtitle' >To star give me your name</h4>
                <form className='home__form' onSubmit={handleSubmit} >
                    <input ref={textInput} type="text" placeholder='your name...' />
                    <button>Start</button>
                </form>
            </div>
            <footer className='footer'>
                <div className='footer__red'></div>
                <div className="footer__black">
                    <div className="circulo1"></div>
                    <div className="circulo2"></div>
                </div>
            </footer>
        </>
    )
}

export default HomePage