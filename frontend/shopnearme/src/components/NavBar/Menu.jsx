import {
  Link,
} from "react-router-dom";
import styles from './Menu.module.css';
//<Link to="/register">Register</Link>
function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class={styles.menuTitle} ><Link to="/"><span>ShopNearMe</span></Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" >Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/register">Register</Link></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;