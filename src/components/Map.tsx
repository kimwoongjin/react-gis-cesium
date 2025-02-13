import { Viewer, Entity, PointGraphics, EntityDescription, ImageryLayer, Scene, CameraFlyTo } from 'resium';
import {
  Cartesian3,
  Color,
  DistanceDisplayCondition,
  HeadingPitchRoll,
  Ion,
  OpenStreetMapImageryProvider,
  SceneMode,
  Transforms,
  VerticalOrigin,
  WebMercatorProjection,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;
const position = Cartesian3.fromDegrees(126.9784, 37.566, 370);

function Map() {
  return (
    <Viewer
      full
      homeButton={false}
      timeline={false}
      animation={false}
      baseLayerPicker={false}
      scene3DOnly={false}
      navigationHelpButton={false}
      mapProjection={new WebMercatorProjection()}
      terrainProvider={undefined}
    >
      <Scene mode={SceneMode.SCENE2D}>
        <CameraFlyTo
          destination={Cartesian3.fromDegrees(127.0267, 37.5005, 100)}
          orientation={{
            heading: 0,
            pitch: -Math.PI / 2,
            roll: 0,
          }}
          duration={0}
        />
        <ImageryLayer
          imageryProvider={
            new OpenStreetMapImageryProvider({
              url: 'https://tile.openstreetmap.org/',
              credit: '',
              maximumLevel: 20,
            })
          }
        />

        {/* 추가 레이어 */}
        <Entity
          position={Cartesian3.fromDegrees(127, 38, 100)}
          billboard={{
            image: './vite.svg',
            scale: 1,
            verticalOrigin: VerticalOrigin.BOTTOM,
          }}
        />
        <Entity
          position={Cartesian3.fromDegrees(127, 36, 100)}
          billboard={{
            image: './hello.png',
            scale: 0.5,
            verticalOrigin: VerticalOrigin.BOTTOM,
          }}
        />
        <Entity
          position={Cartesian3.fromDegrees(127, 37, 100)}
          billboard={{
            image: './liverpool.webp',
            scale: 0.1,
            verticalOrigin: VerticalOrigin.BOTTOM,
          }}
        />
        <Entity
          position={Cartesian3.fromDegrees(127.0249, 37.5024, 100)}
          orientation={Transforms.headingPitchRollQuaternion(position, HeadingPitchRoll.fromDegrees(90.0, 0.0, 0.0))}
          model={{
            uri: './gangnam.glb',
            minimumPixelSize: 128, // 최소 픽셀 크기
            maximumScale: 10000, // 최대 스케일
            distanceDisplayCondition: new DistanceDisplayCondition(0, 9000),
            scale: 1.0, // 기본 스케일
          }}
        />
        <Entity position={position} name="Seoul">
          <PointGraphics pixelSize={10} color={Color.RED} />
          <EntityDescription>
            <div
              style={{
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              <h3>서울 정보</h3>
              <p>여기에 원하는 내용을 넣을 수 있습니다.</p>
            </div>
          </EntityDescription>
        </Entity>
      </Scene>
    </Viewer>
  );
}

export default Map;
