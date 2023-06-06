import React from 'react'
// import profile from ''
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: 'powderblue'}}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{marginLeft: '5px'}}>
      <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
   <a  style={{marginLeft: '5px', fontSize:'20px', fontWeight:'bolder'}}> Kanban Board</a> 
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Board
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        <form className="d-flex">
        <a className="navbar-brand" href="#" style={{marginLeft: '5px'}}>
      <img src="./public/profile.jfif" alt="" width="30" height="24" className="d-inline-block align-text-top"  style={{height: '25px', borderRadius:'50%'}}></img>
  
    </a><button className="btn btn-outline-success" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar