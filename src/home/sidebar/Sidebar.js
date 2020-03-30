import React from 'react';
import Blogger from './blogger/Blogger';
import Category from './category/Category';
function Sidebar() {
  return (
    <aside className="col-md-3 d-none d-md-block">
      <Blogger></Blogger>
      <Category></Category>
    </aside>
  );
}

export default Sidebar;
