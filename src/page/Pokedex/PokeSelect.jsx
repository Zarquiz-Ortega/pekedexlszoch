import React, { useEffect, useRef } from 'react'
import useFetch from '../../hook/useFetch'
import './Style/PokeSelect.css'

const PokeSelect = ({ setSelectValue }) => {

    const [types, getTypes] = useFetch()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/'
        getTypes(url)
    }, [])

    const selectOption = useRef()

    const handleChange = () => {
        setSelectValue(selectOption.current.value)
    }


    return (
        <select className='PokeSelect' ref={selectOption} onChange={handleChange} >
            <option className='PokeSelect__item' value=""> All pokemos</option>
            {
                types?.results.map(type => (
                    <option className='PokeSelect__item' key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))
            }
        </select>
    )
}

export default PokeSelect