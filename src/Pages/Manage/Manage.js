import React, { useState, memo, useCallback } from 'react'
import './Manage.css'

export default function Manage() {

    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('');

    console.log('Manage App Rendered')

    const addCounter = useCallback(() => {
        setCounter(prev => prev + 1)
    }, [counter])
    
    const minusCounter = useCallback(() => {
        setCounter(prev => prev - 1)
    }, [counter])

    return (
        <div className='manageContainer'> 
            <h2>This page is just for practice and comprehence difference between 'useCallback' and 'memo'.</h2> 
            <br /> 
            <h3>Take it easy :)</h3>
            <input 
                className='input'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Title title={title} />
            <h3 className='countValue'>{counter}</h3>
            <Buttons add={addCounter} minus={minusCounter} />
        </div>
    )
}

const Title = memo(({title}) => {
    console.log('Title Rendered')
    return <h3>{title}</h3>
});

const Buttons = memo(({ add, minus}) => {
    console.log('Buttons Rendered')
    return (
        <>
        <button onClick={add}>Add</button>
        <button onClick={minus}>Minus</button>
        </>
    )
})