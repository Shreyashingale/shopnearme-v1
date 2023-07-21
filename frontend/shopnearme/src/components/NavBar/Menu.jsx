import {
  Link,
} from "react-router-dom";
import styles from './Menu.module.css';
function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class={styles.menuTitle} ><Link to="/"><span>ShopNearMe</span></Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ml-auto" id={styles.linkBar}>
            <li className="nav-item">
              <Link  to="/"><span>Home</span></Link>
            </li>
            <li className="nav-item">
              <Link style={{textDecoration:"none"}}  to="/register"><span>Register</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;