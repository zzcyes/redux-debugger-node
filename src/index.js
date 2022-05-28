const { createStore, combineReducers, applyMiddleware, compose } = require('redux');
const { counterReducer, todoReducer } = require('./reducer')

const counterStore = createStore(counterReducer);

// console.debug('counterReducer', counterReducer);
// console.debug('counterStore', counterStore);
// console.debug("counterStore.state: \n", counterStore.getState());
const combineReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});

const value = combineReducer({ value: 0 }, {
    type: 'counter/incremented',
    payload: {
        step: 1
    }
})
console.debug('value', value);
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