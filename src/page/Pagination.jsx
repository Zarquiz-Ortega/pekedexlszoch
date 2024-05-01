import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, setPage, total }) => {


    const handelPrev = (num) => {
        if (page > num) {
            setPage(page - num)
        } else {
            setPage(total)
        }
        scroll(0, 0)

    }

    const handelNext = (num) => {
        if (page <= total - num) {
            setPage(page + num)
        } else {
            setPage(1)
        }
        scroll(0, 0)
    }


    return (
        <div>
            <button className='pag__btn' onClick={() => { handelPrev(10) }} >{'<<<'}</button>
            <button className='pag__btn' onClick={() => { handelPrev(5) }} >{'<<'}</button>
            <button className='pag__btn' onClick={() => { handelPrev(1) }} >{'<'}</button>
            <span> {`Página ${page}  de  ${total}`} </span>
            <button className='pag__btn' onClick={() => { handelNext(1) }} >{'>'}</button>
            <button className='pag__btn' onClick={() => { handelNext(5) }} >{'>>'}</button>
            <button className='pag__btn' onClick={() => { handelNext(10) }} >{'>>>'}</button>
        </div>
    )
}

export default Pagination