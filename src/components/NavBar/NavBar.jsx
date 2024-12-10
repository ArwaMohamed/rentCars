import logo from "../../assets/imges/nav/logo.png";
import customStyle from './NavBar.module.css'
export default function NavBar() {
  return (
    <>
    <div className="d-flex justify-content-center">
      <nav className={`navbar navbar-expand-lg navbar-light bg-white w-100 ${customStyle.navTrans}` }>
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} alt="rent car" className="w-100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="d-flex justify-content-between w-100 ms-5">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" >
              Become a renter
              </a>
              <a className={`nav-link ${customStyle.navLink}`} >
              Rental deals
              </a>
              <a className={`nav-link ${customStyle.navLink}`} >
              How it work
              </a>
              <a className={` nav-link  ${customStyle.navLink}`} >
              Why choose us
              </a>
              
            </div>
            <div>
            <button type="button" className={`btn btn-primary  ${customStyle.signIn}`}>Sign in</button>
            <button type="button" className="btn btn-primary">Sign Up</button>
            </div></div>
          </div>
        </div>
      </nav>   
      </div>
    </>
  );
}
