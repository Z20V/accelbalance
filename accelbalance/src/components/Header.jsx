import React from 'react';
import Logo from './../assets/Images/logo.svg';
import TopBg from './../assets/Images/TopBg.svg';

function Header() {
  return (
    <div className="bg-cover bg-center w-screen m-0 mt-0" style={{ backgroundImage: `url(${TopBg})` }}>
      <div className="p-4">
        <img src={Logo} width={38} height={38} />
      </div>
    </div>
  );
}

export default Header;
