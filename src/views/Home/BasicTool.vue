<template>
    <div class="BasicTool" id="FunctionButton">
        <button class="Button" id="Window">
            <div class="Icon">
                <img src="/svg/Window.svg" alt="SVG Image" class="Svg">
            </div>
        </button>
        <button class="Button" id="User">
            <div class="Icon">
                <img src="/svg/User.svg" alt="SVG Image" class="Svg">
            </div>
        </button>
        <button class="Button" id="Home">
            <div class="Icon">
                <img src="/svg/Home.svg" alt="SVG Image" class="Svg">
            </div>
        </button>
        <button class="Button" id="FullScreen">
            <div class="Icon">
                <img src="/svg/FullScreen.svg" id="FullScreenIcon" alt="SVG Image" class="Svg">
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.BasicTool {
    position: absolute;
    width: 4.2875%;
    
    height: 38.8148%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.Button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    box-shadow: none;
    border-width: 2px;
    border-style: solid;
    border-color: #3a7fce;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 7px;
    background-color: rgba(118, 125, 155, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: background-color 0.5s;
}

.Button:hover {
    background-color: rgba(118, 125, 155, 1);
}

.Button:not(:hover) {
    background-color: rgba(118, 125, 155, 0.3);
}

.Icon {
    position: absolute;
    width: 66.7778%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: #04b2f7;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Svg {
    width: 80%;
    height: 80%;
}

</style>