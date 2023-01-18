const initialState = {
  numberOfIceCream: 10,
}

const iceCreamReducer = (state = initialState , action) => {
  switch(action.type){
    case "ADD_ICE_CREAM":
      return { ...state, numberOfIceCream: state.numberOfIceCream + action.data }
    case "REMOVE_ICE_CREAM":
      return { ...state, numberOfIceCream: state.numberOfIceCream - action.data }
    default: return state;
  }
};

export default iceCreamReducer;