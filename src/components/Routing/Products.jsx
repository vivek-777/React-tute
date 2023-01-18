import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <input type={'text'} placeholder='Search Products'></input>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;