import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  // const colorOptions=[{name:"Blue",backgroundColor:"blue"},{name:"Green",backgroundColor:"Green"},{name:"Yellow",backgroundColor:"Yellow"},
  // {name:"Purple",backgroundColor:"purple"},{name:"Grey",backgroundColor:"grey"}];
  
  // const handleColor=(color)=>{
  //   document.body.style.backgroundColor=color;
  //   // document.getElementsByclassName('btn btn-primary mx-2').style.backgroundColor=color;
  // }
  return (
    <>
    <div>
      {/* Hello I am a navbar. */}
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* Color change buttons- */}
    {/* <div>
      {colorOptions.map((colorOption,index)=>(
        <button key={index} onClick={()=>handleColor(colorOption.backgroundColor)}
        className="btn mx-1" style={{backgroundColor:colorOption.backgroundColor,color:"white",}}>{colorOption.name}</button>
      )

      )}
    </div> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable darkmode':'Enable lightmode'}</label>
</div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> 
      </form> */}
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

Navbar.propTypes={title:PropTypes.string.isRequired,aboutText:PropTypes.string}
Navbar.defaultProps={title:'Set title here',aboutText:'About'} 
