import { defineStore } from "pinia";
import { Viewer } from 'cesium';
import { ScreenSpaceEventHandler } from 'cesium'
export const useCesiumStore = defineStore('CesiumStore', {
    state: () => ({
        CesiumViewer: null as Viewer | null,
        CesiumHandler: null as ScreenSpaceEventHandler | null,
        CesiumToken: 0,
        Longitude: 0,
        Latitude: 0,
        Height: 0
    }),
    actions: {
        // your actions here
    }
});
