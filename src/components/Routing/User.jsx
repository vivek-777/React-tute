import { Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const showActiveUser = searchParams.get('filter') === 'active';

  return (
    <>
      <h1>User</h1>
      <Outlet />
      <button onClick={()=> setSearchParams({ filter: 'active' })}>Active Filter</button>
      <button onClick={()=> setSearchParams({})}>Reset Filter</button>
      {showActiveUser ? (<div>Show Active Users</div>) : (<div>Show All Users</div>)}
    </>
  )
};

export default User;