import Headers from './Headers';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const Layout = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', background: 'rgba(0,0,0,0.7)' }}>
      <Headers />
      <LeftMenu />
      <RightMenu />
    </div>
  );
};

export default Layout;
