import logo from './../resource/logoWhite.png'

function NavBar () {
    return(
        <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="profile">
        <div className="profile-name">GokulKrishna R</div>
        <div className="profile-img"></div>
      </div>
    </nav>
    );
}

export default NavBar ;