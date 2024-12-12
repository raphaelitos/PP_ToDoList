import { useState } from 'react'
import './InWtext.css'

function InWtext(){
    const [inValue, setInputValue] = useState('') //top-level declaration
    function onChangeHandler(event){
        setInputValue(event.target.value)
        console.log(inValue)
    }
    return(
        <div className="container">
            <input type='text' placeholder='Digite aqui...' onChange={onChangeHandler}></input>
            <h1>{inValue}</h1>
        </div>
    )
}

export default InWtext