import { useEffect, useState } from 'react';

import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { Viewer as CesiumViewer } from 'resium';

const API_KEY = import.meta.env.VITE_CESIUM_TOKEN;

const Viewer = () => {
  const [terrainProvider, setTerrainProvider] = useState<
    Cesium.TerrainProvider | Promise<Cesium.TerrainProvider> | undefined
  >(undefined);
  const [viewerInstance, setViewerInstance] = useState<Cesium.Viewer | null>(null);

  // 지형 데이터 초기화
  useEffect(() => {
    const initTerrain = async () => {
      const terrain = await Cesium.createWorldTerrainAsync();
      setTerrainProvider(terrain);
    };
    initTerrain();
  }, []);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = API_KEY;

    if (viewerInstance) {
      const viewer = viewerInstance;

      // 기본 설정
      viewer.scene.globe.enableLighting = false;
      viewer.scene.globe.baseColor = Cesium.Color.BLACK;

      // 더블클릭 이벤트 비활성화
      viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

      // 카메라 설정
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(127.0351926511969, 37.4586008433579, 200),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-30),
          roll: 0.0,
        },
      });
    }
  }, [viewerInstance]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <CesiumViewer
        ref={(e) => setViewerInstance(e?.cesiumElement || null)}
        full
        terrainProvider={terrainProvider}
        sceneMode={Cesium.SceneMode.SCENE3D}
        baseLayerPicker={false}
        geocoder={false}
        timeline={false}
        animation={false}
        fullscreenButton={false}
        homeButton={false}
        navigationHelpButton={false}
        sceneModePicker={false}
        selectionIndicator={false}
        infoBox={false}
      />
    </div>
  );
};

export default Viewer;
