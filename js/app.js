import { setIncrement, setDecrement, setZero } from '../Redux/ActionCreators/actionCreators.js'
import {store} from '../Redux/Store/store.js'

const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')
const pTag = document.querySelector('p')
const zer = document.querySelector('.zer')


const myStore = store


inc.addEventListener('click', () => {
    store.dispatch(setIncrement())
    let pValue = myStore.getState()
    console.log(pValue)
    pTag.innerHTML = pValue
})

dec.addEventListener('click', () => {
    store.dispatch(setDecrement())
    let pValue = myStore.getState()
    pTag.innerHTML = pValue
})

zer.addEventListener('click', () => {
    store.dispatch(setZero())
    let pValue = myStore.getState()
    pTag.innerHTML = pValue
})