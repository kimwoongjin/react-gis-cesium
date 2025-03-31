import Logo from '@/assets/logo.svg';

import './Headers.css';

const Headers = () => {
  return (
    <div className="custom-headers">
      <img
        src={Logo}
        alt="logo"
        style={{
          height: 45,
        }}
      />
      <button className="text-button">TEST</button>
    </div>
  );
};

export default Headers;
