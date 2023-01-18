const ADD_ICE_CREAM = () => (dispatch) => {
  dispatch({ type: "ADD_ICE_CREAM", data: 2 });
};

const REMOVE_ICE_CREAM = () => (dispatch) =>  {
  dispatch({type: "REMOVE_ICE_CREAM", data: 2 });
};

export { ADD_ICE_CREAM, REMOVE_ICE_CREAM };