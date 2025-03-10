import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <h1>
        <Link to="/logs/new">New Log</Link>
      </h1>
    </nav>
  );
};

export default NavBar;
