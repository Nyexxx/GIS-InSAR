<template>
    <div class="Bottom">
        <span class="Time" id="Time">{{ recentTime }}</span>
        <div class="SpanContainer">
            <span class="Mouse-Longitude" id="Mouse-Longitude">{{ Longitude }}</span>
            <span class="Mouse-Latitude" id="Mouse-Latitude">{{ Latitude }}</span>
            <span class="Mouse-Altitude" id="Mouse-Altitude">{{ Height }}</span>
        </div>
        <!-- <div class="SchoolLogo"></div> -->
        <img src="/home/cdut.png" alt="" class="SchoolLogo" ondragstart="return false;">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCesiumStore } from '../../store/cesiumStore';
import { storeToRefs } from 'pinia';
// import { ScreenSpaceEventType, Cartographic, Math } from 'cesium'
let recentTime = ref("")
setInterval(updateCurrentTime, 1000);
function updateCurrentTime() {
    recentTime.value = getCurrentTime()
}
function formatTime(time: number): string {
    if (time > 10) {
        return time.toString()
    } else {
        return "0" + time.toString()
    }
}
function getCurrentTime(): string {
    var currentTime: Date = new Date();
    var year: number = currentTime.getFullYear();
    var month: string = formatTime(currentTime.getMonth() + 1);
    var day: string = formatTime(currentTime.getDate());
    var hours: string = formatTime(currentTime.getHours());
    var minutes: string = formatTime(currentTime.getMinutes());
    var seconds: string = formatTime(currentTime.getSeconds());
    var timeString: string = year + "年" + month + "月" + day + "日   " + hours + " " + ":" + " " + minutes + " : " + seconds;
    return timeString;
}
const cesiumStore = useCesiumStore()
let { Longitude,Latitude,Height } = storeToRefs(cesiumStore)


</script>

<style scoped>
.Bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(6, 19, 73, 0.45);

}

/* 如果需要加上学校logo的图片SpanCoantainer的right属性应该11.8229% */
.SpanContainer {
    position: absolute;
    right: 11.8229%;
    /* right: 3.3229%; */
    height: 38.5789%;
    width: 21%;
    display: flex;
    align-items: center;
}

.SpanContainer span {
    font-family: Arial, sans-serif;
    color: white;
    vertical-align: middle;
    font-weight: 700;
    white-space: nowrap;
    font-size: 1.3rem;
}

.Mouse-Longitude {
    width: 38.5%;
}

.Mouse-Latitude {
    width: 38.5%;
}

.Mouse-Altitude {
    width: 23%;
}

.SchoolLogo {
    position: absolute;
    right: 2.1352%;
    /* bottom: 17.54386%; */
    height: 57.8947%;
    /* width: 30px; */
    object-fit: contain;
    user-select: none;
}

.Time {
    position: absolute;
    left: 2.1875%;
    color: white;
    vertical-align: middle;
    font-weight: 700;
    white-space: nowrap;
    white-space: pre;
    font-size: 1.25rem;
}

.ScaleBar {
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>