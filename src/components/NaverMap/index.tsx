import { Circle, Container as MapDiv, Marker, NaverMap, Polygon, useNavermaps } from 'react-naver-maps';
import cctvIcon from '@/assets/cctvIcon.svg';
import { useContext } from 'react';
import { CctvContext } from '../../provider/CctvProvider';

function calculateSector(
  center: { lat: number; lng: number },
  radius: number,
  startAngle: number,
  endAngle: number,
  segments: number
) {
  const points = [];
  const radianStart = (startAngle * Math.PI) / 180;
  const radianEnd = (endAngle * Math.PI) / 180;
  const angleStep = (radianEnd - radianStart) / segments;

  points.push(center); // 중심점 추가

  for (let i = 0; i <= segments; i++) {
    const angle = radianStart + i * angleStep;
    const lat = center.lat + (radius / 6378137) * (180 / Math.PI) * Math.sin(angle); // 위도 계산
    const lng =
      center.lng + ((radius / 6378137) * (180 / Math.PI) * Math.cos(angle)) / Math.cos((center.lat * Math.PI) / 180); // 경도 계산
    points.push({ lat, lng });
  }

  points.push(center); // 닫힌 폴리곤을 위해 마지막에 중심점 추가
  return points;
}

const NaverMapComponent = () => {
  const navermaps = useNavermaps();
  const { showCctv } = useContext(CctvContext);

  const center = { lat: 35.838478, lng: 129.287023 };
  const sectorCoordinates = calculateSector(center, 50, 390, 300, 120);
  const sectorCoordinates2 = calculateSector({ lat: 35.838817, lng: 129.288636 }, 50, 40, 130, 120);

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
      >
        <Marker position={new navermaps.LatLng(35.838807, 129.288626)} icon={cctvIcon} draggable />
        <Marker position={new navermaps.LatLng(35.838478, 129.287022)} icon={cctvIcon} />

        {showCctv && (
          <>
            <Polygon
              paths={[sectorCoordinates2.map((coord) => new naver.maps.LatLng(coord.lat, coord.lng))]}
              strokeWeight={0}
              strokeLineCap="round"
              fillColor="#03a5fc"
              fillOpacity={0.6}
            />
            <Polygon
              paths={[sectorCoordinates.map((coord) => new naver.maps.LatLng(coord.lat, coord.lng))]}
              strokeWeight={0}
              strokeLineCap="round"
              fillColor="#03a5fc"
              fillOpacity={0.6}
            />
          </>
        )}
        <Circle
          center={new navermaps.LatLng(35.838564, 129.288634)}
          radius={25}
          strokeOpacity={0}
          fillColor="#fa14f6"
          fillOpacity={0.4}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default NaverMapComponent;
