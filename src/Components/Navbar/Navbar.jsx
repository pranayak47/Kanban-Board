import React from 'react'
// import profile from ''
function Navbar({changeTheme}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: 'powderblue'}}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{marginLeft: '5px'}}>
      <img src="data:image/png;base64,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" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
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
            <a className="nav-link" href="#">Change background</a>
            {/* <button className="dropdown-item" onClick={changeTheme}>change</button> */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Board
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              {/* <li> <button className="dropdown-item" onClick={changeTheme}>change</button></li> */}
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
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" width="30" height="24" className="d-inline-block align-text-top"  style={{height: '25px', borderRadius:'50%'}}></img>
  
    </a><button onClick={changeTheme} className="btn btn-outline-primary" type="submit">change Theme</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar