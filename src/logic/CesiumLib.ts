import * as Cesium from 'cesium'


class cesiumFunction {
    public Test (viewer : Cesium.Viewer){
        console.log(viewer)
    }
    
    public FlyToHome(viewer : Cesium.Viewer){
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(103.105582, 26.463810, 41260.10607353638),
            orientation: {
                heading: 5.746840545972772,
                pitch: -1.1677714000540331,
                roll: 0.0005044850112243537
            }
        })
    }


}   

export default cesiumFunction