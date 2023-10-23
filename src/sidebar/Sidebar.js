import React from 'react';
import Blogger from './blogger/Blogger';
import Category from './category/Category';
function Sidebar() {
  return (
    <div className='position-sticky' style={{top: 70}}>
      <Blogger></Blogger>
      <Category></Category>
    </div>
  );
}

export default Sidebar;
