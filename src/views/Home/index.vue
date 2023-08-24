<template>
    <div class="Back" id="Back">
        <CesiumContainer v-if="true" class="CesiumContainer"></CesiumContainer>
        <div class="BackGround"></div>
        <Head class="Head"></Head>
        <Chart class="Chart0"></Chart>
        <Chart class="Chart1"></Chart>
        <FunctionButton class="FunctionButton"></FunctionButton>
        <FunctionMenu></FunctionMenu>
        <BasicTool class="BasicTool"></BasicTool>
        <Bottom class="Bottom"></Bottom>
    </div>
</template>

<script setup lang="ts">
import CesiumContainer from './CesiumContainer.vue'
import Bottom from './Bottom.vue';
import Head from './Head.vue'
import Chart from './Chart.vue'
import FunctionButton from './FunctionButton.vue'
import FunctionMenu from './FunctionMenu.vue'
import BasicTool from './BasicTool.vue'
</script>


<style scoped>
.Back {
    width: 100%;
    height: 100%;
}

.BackGround {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    pointer-events: none;
    background-image: url('/home/BackGround.png');
    /* background-color: yellow; */
    background-size: 100% 100%;
}

#BackGround>* {
    pointer-events: auto;
}


.Head {
    position: absolute;
    top: 0px;
    width: 100%;
}

.FunctionButton {
    position: absolute;
    /* background-color: bisque; */
    top: 9.0740%;
    right: 3.7962%;
}

.BasicTool {
    position: absolute;
    bottom: 9.53703%;
    right: 2.08333%;
}

.Chart0 {
    position: absolute;
    top: 8.8889%;
    left: 2.1875%;
}

.Chart1 {
    position: absolute;
    top: 51.4814%;
    left: 2.1875%;
}

.CesiumContainer {
    width: 100%;
    height: 100%;
}

.Bottom {
    position: absolute;
    width: 100%;
    height: 5.27778%;
    bottom: 0px;
}</style>
