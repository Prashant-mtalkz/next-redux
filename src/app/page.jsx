import { configureStore } from "@reduxjs/toolkit";

const cake_order ="Cake1"
const cake_restore ="Cake2"
function orderCake() {
    return {
        type:cake_order,
        quantity:9
    }
}
function restoreCake(qty = 1) {
  return {
      type:cake_restore,
      quantity:qty
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
        case cake_restore:
              return {
                  noOfCake : state.noOfCake +action.quantity
              }    
        default :
            return state    
    }

}

export const store = configureStore({
  reducer: reducer,
})

const unsubs= store.subscribe(()=>console.log('update state' ,store.getState()));
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restoreCake(5))
unsubs()
const Page = ()=>{

  // const obj = {
  //   id: 1,
  //   name: 'John Doe',
  //   address: {
  //     street: '123 Main St',
  //     city: 'New York',
  //     zip: 10001
  //   }
  // };
  // console.log(obj)
  return <>
    hello
  </>
}

export default Page