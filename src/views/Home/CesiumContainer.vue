<template>
    <div class="CesiumContainer" id="CesiumContainer"></div>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { userUserStore } from '../../store/userStore.ts'
import { useCesiumStore } from '../../store/cesiumStore'
import URL from '../../config/ServeURL'

onMounted(async () => {

    //初始化逻辑
    const UserStore = userUserStore()
    let { Username, Password } = storeToRefs(UserStore)
    const response = await fetch(URL.URL_Cesium_Token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: Username.value,
            password: Password.value,
        }),
    });
    const data = await response.json();
    if (response.status != 200) {
        alert('用户信息错误')
    } else {
        Cesium.Ion.defaultAccessToken = data.message
    }
    console.log(data.message)
    var esri = new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    });
    var viewer: Cesium.Viewer = new Cesium.Viewer("CesiumContainer", {
        timeline: false,//是否显示时间轴
        animation: false,//是否创建动画小控件，左下角仪表
        sceneModePicker: false,//是否显示2D，3D选择器
        baseLayerPicker: false,//是否显示图层选择器
        navigationHelpButton: false,//是否显示右上角的帮助按钮
        homeButton: false,//是否显示Home按钮  
        geocoder: false,//是否显示geocoder小器件，右上角查询按钮  
        imageryProvider: esri,
        fullscreenButton: false,
        infoBox: false,
        //实现对高程的加载，展现出3D图像
        terrainProvider: new Cesium.CesiumTerrainProvider({
            url: Cesium.IonResource.fromAssetId(1)
        })
    })
    viewer.cesiumWidget.creditContainer.remove()
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);

    //将view handler 挂载到全局
    const cesiumStore = useCesiumStore()
    let { CesiumViewer, CesiumHandler, Longitude, Latitude, Height } = storeToRefs(cesiumStore);
    handler.setInputAction(function (movement: any) {
        let ray: any = viewer.camera.getPickRay(movement.endPosition)
        let cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        if (cartesian == null) {
            return
        }
        let cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        let lng = Cesium.Math.toDegrees(cartographic.longitude); // 经度
        let lat = Cesium.Math.toDegrees(cartographic.latitude); // 纬度
        let alt = cartographic.height; // 高度
        let coordinate = {
            longitude: Number(lng.toFixed(6)),
            latitude: Number(lat.toFixed(6)),
            altitude: Number(alt.toFixed(2))
        }
        Longitude.value = coordinate.longitude
        Latitude.value = coordinate.latitude
        Height.value = coordinate.altitude
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    CesiumViewer.value = viewer
    CesiumHandler.value = handler


})
</script>

<style scoped>
.CesiumContainer {
    width: 100%;
    height: 100%;
}

.cesium-fullscreenButton {
    visibility: hidden;
}
</style>../../logic/CesiumLib.ts