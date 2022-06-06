 const InitialState = {
     value: 0,
 };

 const Action = {
     increment: (step = 1) => ({
         type: "counter/incremented",
         payload: { step },
     }),
     decrement: (step = 1) => ({
         type: "counter/decremented",
         payload: { step },
     }),
 };

 const Reducer = (state, action) => {
     const { type, payload } = action;
     switch (type) {
         case "counter/incremented":
             return {...state, value: state.value + (payload.step ? payload.step : 1) };
         case "counter/decremented":
             return {...state, value: state.value - (payload.step ? payload.step : 1) };
         default:
             return state;
     }
 };

 module.exports = {
    couterInitialState: InitialState,
    counterAction: Action,
    counterReducer: Reducer
 }