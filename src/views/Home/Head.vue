<template>
    <div class="Head">
        <div class="TitleBack">
            <span class="TitleName">海量InSAR数据滑坡智能解译与可视化分析在线平台</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

@font-face {
    font-family: "TitleFont";
    src: url("/font/TitleFont.ttf") format("truetype");
}
.Head{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 6.8518%;
    background-image: url('/home/HeadBack.svg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center; 
}

.TitleBack{
    /* background-color: rgba(255, 0, 0, 0.2); */
    background-image: url('/home/TitleBack.svg');
    background-size: 100% 100%;
    height: 77.027%;
    width: 36.8872%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.TitleName{
    font-family: "TitleFont", Arial, sans-serif;
    font-size: 1.3rem;
    font-style: italic;
    color: white;
   
}

</style>