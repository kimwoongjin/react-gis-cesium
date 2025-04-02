import { useState } from 'react';

import './LeftMenu.css';

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`left-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="left-sidebar-header">
        <div className="title-container">
          <div className="diamond-icon">◆</div>
          <h3 className="left-sidebar-title">장비 목록</h3>
          <span className="item-count">0</span>
        </div>
        <button className="left-toggle-button" onClick={toggleSidebar}>
          {isOpen ? '◀' : '▶'}
        </button>
      </div>
      <div className="left-sidebar-content"></div>
    </div>
  );
};

export default LeftMenu;
