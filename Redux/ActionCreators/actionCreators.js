import {increment,decrement,zero} from '../Actions/actions.js'


const setIncrement = () => {
    return{
        type: increment
    }
}

const setDecrement = () => {
    return{
        type: decrement
    }
}

const setZero = () => {
    return{
        type: zero
    }
}

export{
    setIncrement,
    setDecrement,
    setZero
}