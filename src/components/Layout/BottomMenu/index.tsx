import { useState } from 'react';
import './BottomMenu.css';

const BottomMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bottom-menu ${isOpen ? 'open' : 'closed'}`}>
      <div className="bottom-menu-header" onClick={toggleSidebar}>
        <div className="title-container">
          <div className="bottom-menu-title">CCTV 영상 목록</div>
        </div>
      </div>
      <div className="bottom-menu-content"></div>
    </div>
  );
};

export default BottomMenu;
