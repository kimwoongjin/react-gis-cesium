import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

const NaverMapComponent = () => {
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(35.83844, 129.287995)}
        defaultZoom={19}
        mapTypeId={navermaps.MapTypeId.SATELLITE}
      ></NaverMap>
    </MapDiv>
  );
};

export default NaverMapComponent;
