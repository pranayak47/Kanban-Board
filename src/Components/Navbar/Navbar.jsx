import React, { useState } from 'react'
// import profile from ''
import {AiOutlineClear} from 'react-icons/ai'

function Navbar({changeTheme},props) {
  const [data,setData]=useState()
  const clearData=()=>{
    setData([]);
 }
  return (
    //  
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'powderblue'}}>
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
          <li className="nav-item" >
        {/* <button   onClick={() => props.removeBoardd()}>add</button> */}
            <button  style={{marginLeft: '5px'}}  className="btn btn-outline-secondary" type="submit">    <AiOutlineClear style={{fontSize:'23px',color:'blue'}} /> Clear Data</button>
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
        {/* <AiOutlineClear style={{fontSize:'23px'}} />
            <button  style={{marginLeft: '5px'}}  className="btn btn-outline-primary" type="submit"> Clear Data</button> */}
        <a className="navbar-brand" href="#" style={{marginLeft: '5px'}}>
      
           {/* <button     className={`${styles.pBtn} ${styles.powerUp}`} >
          <BiRocket fontSize="1.4rem" /> <p>Power-Ups</p>
        </button> */}
      <img src="data:image/png;base64,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" alt="" width="30" height="24" className="d-inline-block align-text-top"  style={{height: '25px', borderRadius:'50%'}}></img>
  
    </a><button onClick={changeTheme} className="btn btn-outline-primary" type="submit">change Theme</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar