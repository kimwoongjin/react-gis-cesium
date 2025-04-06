import { useContext, useState } from 'react';
import cctv from '@/assets/cctv.svg';

import './RightMenu.css';
import { CctvContext } from '../../../provider/CctvProvider';

const RightMenu = () => {
  const { showCctv, setShowCctv } = useContext(CctvContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`right-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="right-sidebar-header">
        <div className="title-container">
          <h3 className="right-sidebar-title">AI 이상 상황</h3>
        </div>
        <button className="right-toggle-button" onClick={toggleSidebar}>
          {isOpen ? '▶' : '◀'}
        </button>
        <img className="cctv-button" alt="cctv" src={cctv} onClick={() => setShowCctv(!showCctv)} />
      </div>
      <div className="right-sidebar-content"></div>
    </div>
  );
};

export default RightMenu;
