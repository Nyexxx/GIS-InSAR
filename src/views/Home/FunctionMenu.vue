<template>
    <div class="OptionBox">
        <div class="OptionContainer-Layer" v-if="true" id="OptionContainer-Layer">
            <button class="NormalOption" id="InSAR">
                <input type="checkbox" id="Checkbox-InSAR">
                <span class="Checkbox-Span" id="Checkbox-Span-InSAR">InSAR数据</span>
            </button>
            <button class="NormalOption" id="Option-SubmergedArea">
                <input type="checkbox" id="Checkbox-SubmergedArea">
                <span class="Checkbox-Span" id="SubmergedArea">淹没区</span>
            </button>
            <button class="NormalOption" id="Option-Img0">
                <input type="checkbox" id="Checkbox-Img0">
                <span class="Checkbox-Span" id="Checkbox-Span-Img0">小米地-Img</span>
            </button>
            <button class="NormalOption" id="Option-Img1">
                <input type="checkbox" id="Checkbox-Img1">
                <span class="Checkbox-Span" id="Checkbox-Span-Img1">五里坡-Img</span>
            </button>
            <button class="NormalOption" id="Option-Esri">
                <input type="checkbox" id="Checkbox-Esri">
                <span class="Checkbox-Span" id="Checkbox-Span-Esri">Esri-底图</span>
            </button>
            <button class="NormalOption" id="Option-Sential2">
                <input type="checkbox" id="Checkbox-Sential2">
                <span class="Checkbox-Span" id="Checkbox-Span-Sential2">Sential2-底图</span>
            </button>
            <button class="NormalOption" id="Option-BingMap">
                <input type="checkbox" id="Checkbox-BingMap">
                <span class="Checkbox-Span" id="Checkbox-Span-BingMap">BingMap-底图</span>
            </button>
            <button class="NormalOption" id="Option-BingRoad">
                <input type="checkbox" id="Checkbox-BingRoad">
                <span class="Checkbox-Span" id="Checkbox-Span-BingRoad">BingRoad-底图</span>
            </button>
            <button class="NormalOption" id="Option-Tianditu">
                <input type="checkbox" id="Checkbox-Tianditu">
                <span class="Checkbox-Span" id="Checkbox-Span-Tianditu">天地图-底图</span>
            </button>

        </div>
        <div class="OptionContainer-Time" v-if="true" id="OptionContainer-Time"></div>
        <div class="OptionContainer-AnlysisTool" v-if="true" id="OptionContainer-AnlysisTool">
            <button class="NormalOption" id="InsarOrderByTime">时序提取</button>
            <button class="NormalOption" id="InsarOrderByLine">剖面分析</button>
            <button class="NormalOption" id="InsarInterpretation">智能解译</button>
            <button class="NormalOption" id="InSARSubmergedArea">淹没区分析</button>
            <button class="NormalOption" id="ClaerForAnlysisTool">清除</button>

        </div>
        <div class="OptionContainer-MeterTool" v-if="true" id="OptionContainer-MeterTool">
            <button class='NormalOption' id="DistanceMeasure">直线测距</button>
            <button class="NormalOption" id="GroundMeasure">贴地测距</button>
            <button class="NormalOption" id="SurfaceMeasure">平面面积</button>
            <button class="NormalOption" id="GroundSurfaceMeasure">贴地面积</button>
            <button class="NormalOption" id="Clear">清除</button>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .OptionBox {
    position: absolute;
    width: 37.9167%;
    right: 3.7962%;
    top: 13.8333%;
    height: 27%;
    /* background-color: skyblue; */
    /* display: flex;
    justify-content: space-between; */
    pointer-events: none;
}
.OptionBox>* {
    pointer-events: auto;
}


::-webkit-scrollbar {
    width: 5px;
    /* 滚动条宽度 */
    height: 10px;
    /* 滚动条高度 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    background: #6b92fe;
    /* 滚动条的颜色 */
    border-radius: 4px;
    /* 圆角尺寸 */
}

/* 滚动条滑块:hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* 鼠标悬停时滚动条的颜色 */
}

.OptionContainer-Layer {
    width: 24.5%;
    /* height: 100%; */
    max-height: 100%;
    left: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(97, 107, 154, 0.7);
    border-radius: 4px;
    overflow: auto;


    /* 过渡属性、过渡时间和过渡函数 */
}

.OptionContainer-Time {
    position: absolute;
    top: 0px;
    width: 24.5%;
    /* height: 100%; */
    max-height: 100%;
    left: 25.166666%;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(97, 107, 154, 0.7);
    border-radius: 4px;
    overflow: auto;
}

.OptionContainer-AnlysisTool {
    position: absolute;
    top: 0px;
    width: 24.5%;
    /* height: 100%; */
    max-height: 100%;
    left: 50.3333333%;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(97, 107, 154, 0.7);
    border-radius: 4px;
    overflow: auto;
}

.OptionContainer-MeterTool {
    position: absolute;
    top: 0px;
    width: 24.5%;
    /* height: 100%; */
    max-height: 100%;
    right: 0px;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: rgba(97, 107, 154, 0.7);
    border-radius: 4px;
    overflow: auto;

    border-width: 0.5px;
    border-style: solid;
    border-color: #3a7fce;


}

.NormalOption {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    box-shadow: none;
    height: 30px;
    background-color: rgba(97, 107, 154, 0.7);
    font-size: 0.8rem;
    text-align: left;
    padding-left: 8px;
    color: white;

    transition: background-color 0.5s;
    ;
}

.NormalOption:hover {
    background-color: rgb(19, 118, 173, 1);
}

.NormalOption:not(:hover) {
    background-color: rgba(118, 125, 155, 0.3);
}

</style>