/* eslint-disable no-unused-vars */
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from './auth';

// const Navbar = () =>{
//   return (
//     <nav>
//       <Link to='/'>Home</Link>
//       <Link to='/about'>About</Link>
//     </nav>
//   )
// }

// export default Navbar;

const Navbar = () =>{
  const auth = useAuth();
  
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  };

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>
      <NavLink style={navLinkStyle} to='/about'>About</NavLink>
      <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
      <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
      {
        !auth.user && (
          <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
        ) 
      }
    </nav>
  )
}

export default Navbar;