import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>RESTy</h1>
        <nav className="nav">
        <ul>
          <li>
            <NavLink className="navItem" exact to="/">
              Home
             </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/history">
              History
             </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/help">
              Help
             </NavLink>
          </li>
        </ul>
      </nav>
      </header>
    );
  };

  export default Header;
