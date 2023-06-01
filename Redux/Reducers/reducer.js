import { increment, decrement, zero } from "../Actions/actions.js";

export const counter = (state = 0, action) => {
    switch (action.type) {
        case increment:{
            return state + 1;
        }
        case decrement:{
            return state - 1    
        }
        case zero:{
            return state = 0
        }
        default:{
            return state
        }
    }
}
