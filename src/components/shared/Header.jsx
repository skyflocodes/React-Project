import React, { useEffect } from 'react';

const Header = ({ title = "Project" }) => {
  useEffect(() => document.title = title);

  return (
    <header className="bg-dark p-2 text-center text-light">
      <h1>{ title }</h1>
    </header>
  );
}
 
export default Header;