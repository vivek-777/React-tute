import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  post: '',
  loading: true,
  error: '',
};

const reducer = (state, action) => {
  switch(action.type){
    case "FETCH_SUCCESS":
      return { ...initialState, post: action.value, loading: false }
    case "FETCH_ERROR":
      return { ...initialState, error: 'Something Went Wrong', loading: false }
    default: return state;
  }
};

const FetchingData = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const { loading, error, post} = data;

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", value: res.data.title })
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" })
      })
  }, [])

  return (
    <div>
      {loading ? 'Loading ....' : post}
      {error}
    </div>
  );

};

export default FetchingData;