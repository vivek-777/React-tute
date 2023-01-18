import redux from 'redux';
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKES = 'BUY_CAKES';

function buyCake(){
  return {
    type: BUY_CAKES,
    info: 'first exaple'
  }
}

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKES: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return initialState
  }
}

const rootReducer = combineReducers({
  cake: reducer
})

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(buyCake())
unsubscribe();