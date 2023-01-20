import { configureStore } from "@reduxjs/toolkit";

const cake_order ="Cake1"
function orderCake() {
    return {
        type:cake_order,
        quantity:9
    }
}

const initial_state = {
    noOfCake:10
}

const reducer =(state =initial_state,action)=>{
    switch(action.type){
        case cake_order:
            return {
                noOfCake : state.noOfCake -1
            }
        default :
            return state    
    }

}

const store = configureStore(reducer)
console.log(store)