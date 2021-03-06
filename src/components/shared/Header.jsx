import React, { useEffect } from 'react';

const Header = ({ title = "Project" }) => {
  useEffect(() => document.title = title);

  return (
    <header>
      <h1>{ title }</h1>
    </header>
  );
}
 
export default Header;