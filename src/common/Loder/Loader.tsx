import React from 'react'
import logo_color from "../../assets/img/logo.png"

const Loader = (props:any) => {
  return (
<>
      {props.loading && (
        <div className={`row no-gutters vh-100 loader-screen ${props.loading===false?"d-none":"d-show"}`}>
        <div className={`col align-self-center text-white text-align-center `}>
        <img src={logo_color} alt=""/>
          <div className="laoderhorizontal">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>    )}


    {/* </div> */}
  
    </>
  )
}

export default Loader;

Loader.defaultProps = {
  loading: false,
};