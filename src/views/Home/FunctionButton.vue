<template>
    <div class="FunctionBox">
        <button class="Dropbtn">
            <div style="width: 5.5556%; height: 100%;"></div>
            <img src="/button/Layer.png" class="DropbtnImg" alt="" id="Button-Layer-Img-0">
            <div style="width: 5.6%; height: 100%;"></div>
            <span class="DropbtnSpan">图层</span>
            <div style="width: 12%; height: 100%;"></div>
            <img src="/button/Triangle.png" class="Triangle" alt="" id="Button-Layer-Img-1">
        </button>
        <button class="Dropbtn" id="Button-Time">
            <div style="width: 5.5556%; height: 100%;"></div>
            <img src="/button/Time.png" class="DropbtnImg" alt="" id="Button-Time-Img-0">
            <div style="width: 5.6%; height: 100%;"></div>
            <span class="DropbtnSpan">时间选择</span>
            <div style="width: 12%; height: 100%;"></div>
            <img src="/button/Triangle.png" class="Triangle" alt="" id="Button-Time-Img-1">
        </button>
        <button class="Dropbtn" id="Button-AnlysisTool">
            <div style="width: 5.5556%; height: 100%;"></div>
            <img src="/button/AnlysisTool.png" class="DropbtnImg" alt="" id="Button-AnlysisTool-Img-0">
            <div style="width: 5.6%; height: 100%;"></div>
            <span class="DropbtnSpan">分析工具</span>
            <div style="width: 12%; height: 100%;"></div>
            <img src="/button/Triangle.png" class="Triangle" alt="" id="Button-AnlysisTool-Img-1">
        </button>
        <button class="Dropbtn" id="Button-MeterTool">
            <div style="width: 5.5556%; height: 100%;"></div>
            <img src="/button/MeterTool.png" class="DropbtnImg" alt="" id="Button-MeterTool-Img-0">
            <div style="width: 5.6%; height: 100%;"></div>
            <span class="DropbtnSpan">测量工具</span>
            <div style="width: 12%; height: 100%;"></div>
            <img src="/button/Triangle.png" class="Triangle" alt="" id="Button-MeterTool-Img-1">
        </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.FunctionBox {
    width: 37.9167%;
    height: 4.2593%;
    display: flex;
    justify-content: space-between;
}

.Dropbtn {
    width: 24.5%;
    height: 100%;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    box-shadow: none;
    border-width: 0.8px;
    border-style: solid;
    border-color: #3a7fce;
    /* width: 100%; */
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    background-color: rgba(118, 125, 155, 0.7);
    top: 0px;
    display: flex;
    align-items: center;
}

.DropbtnImg {
    /* position: absolute; */
    /* left: 10px; */
    height: 52.2272%;
    aspect-ratio: 1 / 1;
}

.DropbtnSpan {
    /* background-color: brown; */
    width: 43.3333%;
    height: 42%;
    font-size: 0.8rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: white;
    /* justify-content: center; */
}

.Triangle {
    height: 8.889%;
    height: 19.565%;
}
</style>