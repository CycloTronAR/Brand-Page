import "./nav_style.css";

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/brand_logo.png" alt="nike logo" />
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>login</button>
      </nav>
    </div>
  );
};

export default Nav;
