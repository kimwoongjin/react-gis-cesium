import { Viewer, Entity, Camera, CameraFlyTo } from 'resium';
import { Cartesian3 } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

function Map() {
  return (
    <Viewer full resolutionScale={2}>
      <Camera position={position} />
      <CameraFlyTo duration={5} destination={position} />
      <Entity position={position} point={pointGraphics} name="TEST" description={'cesium GIS test'} />
    </Viewer>
  );
}

export default Map;
