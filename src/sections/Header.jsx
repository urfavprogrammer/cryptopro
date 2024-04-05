import React from 'react';

function Header() {

    var name = {
      fName: "Amanda",
      lName: "Ortez"
    }
    
  return (
    <header >

      <div className='nav-user'>
      <p>
          <span>{name.fName}</span>
          <span>{name.lName}</span>
          
          </p>
      

      </div>




    </header>

  )
}

export default Header
