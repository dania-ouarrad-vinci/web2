// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logo from '../../img/logo.png';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

// fixed-top 
const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light "> 
        <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img  class= "logo" src="${logo}" alt="Logo">
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Classement</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/about">A propos</a>
              </li>  
              <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/categories">Catégories</a>
            </li>  
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class=" nav-link  btn btn-color" href="#" data-uri="/create">Créer ton quiz</a>
            </li>  
            <li class="nav-item">
            <a class="nav-link " href="#" data-uri="/">Inscription</a>
            </li>
          <li class="nav-item ">
            <a class="nav-link " href="#" data-uri="/">Connexion</a>
          </li>
            </ul>
          </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
