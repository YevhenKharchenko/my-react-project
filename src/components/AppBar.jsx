import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <header>
      <p>
        <span role="img" aria-label="computer icon">
          💻
        </span>{" "}
        GoMerch Store
      </p>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
