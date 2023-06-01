import React from 'react';
import foto from "../download.png"

function Header() {
  return (
    <header>
      <div className="div-foto">
        <img alt="foto de perfil" src={foto}/>
      </div>
      <div>
        <h1>Lucas Carvalho</h1>
        <h2>Dev Full Stack</h2>
      </div>

    </header>
  );
}

export default Header;
