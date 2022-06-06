const { createStore, combineReducers, applyMiddleware, compose } = require('redux');
const { counterReducer, todoReducer,counterAction , couterInitialState} = require('./reducer')

// store enhancer 
// const enhancer  = (...args)=>{
//    console.debug("store enhancer: ",args);

//    return function (){
//     console.debug("return clourse:",arguments);
//    }
// }

// createStore
const counterStore = createStore(counterReducer, couterInitialState);

// console.debug('counterReducer', counterReducer);
console.debug('counterStore', counterStore);

// store.subscribe
let currentValue = couterInitialState;

const unsubscribe = counterStore.subscribe(()=>{
  console.debug("监听 store ~~~");
  let previousValue = currentValue
  currentValue = counterStore.getState();

  if (previousValue !== currentValue) {
      console.log(
        'Some deep nested property changed from',
        previousValue,
        'to',
        currentValue
      )
    }
})

// store.getState
console.debug("before decrement: \n", counterStore.getState());

// store.dispatch
counterStore.dispatch(counterAction.increment(188))
console.debug("after decrement-before unsubscribe: \n", counterStore.getState());

// unsubscribe
unsubscribe();

counterStore.dispatch(counterAction.increment(188))
console.debug("after decrement-after unsubscribe: \n", counterStore.getState());



// const combineReducer = combineReducers({
//     counter: counterReducer,
//     todo: todoReducer
// });

// const value = combineReducer({ value: 0 }, {
//     type: 'counter/incremented',
//     payload: {
//         step: 1
//     }
// })
// console.debug('value', value);
// console.debug('combineReducer', combineReducer);
// const fs = require('fs');

// fs.writeFileSync('combineReducer.txt', combineReducer.toString())


// const todoStore = createStore(todoReducer)
// console.debug("todoStore.state: \n", todoStore.getState());

// const combineStore = createStore(
//     combineReducers({
//         counter: counterReducer,
//         todo: todoReducer
//     })
// );

// console.debug("combineStore.state: \n", combineStore.getState());