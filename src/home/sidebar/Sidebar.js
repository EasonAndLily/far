import React from 'react';
import Blogger from './blogger/Blogger';
function Sidebar() {
  return (
    <aside className="col-md-3 d-none d-md-block">
      <Blogger></Blogger>
    </aside>
  );
}

export default Sidebar;
