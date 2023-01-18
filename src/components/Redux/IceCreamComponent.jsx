import { useDispatch , useSelector } from 'react-redux';
import { ADD_ICE_CREAM, REMOVE_ICE_CREAM } from './Dispatcher/dispatcher';

const IceCreamComponent = () => {
  const dispatch =  useDispatch();
  const numberOfIceCream =  useSelector((state) => state.ICE_CREAM.numberOfIceCream );

  const onAddIceCream = () => {
    dispatch(ADD_ICE_CREAM())
  };

  const onRemoveIceCream = () => {
    dispatch(REMOVE_ICE_CREAM())
  };

  return (
    <>
      <div>Number of Ice Cream - {numberOfIceCream}</div>
      <button onClick={onAddIceCream}>Add IceCream</button>
      <button onClick={onRemoveIceCream}>Remove IceCream</button>
    </>
  )
};

export default IceCreamComponent;