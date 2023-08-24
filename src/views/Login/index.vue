<template>
    <div class="Back">
        <h2>海量InSAR数据滑坡灾害智能解译与可视化分析在线平台</h2>
        <div class="LoginBack">
            <div class="FormContainer">
                <TypeUser v-if="showComponent_TypeUser" @response="result_Type"></TypeUser>
                <RegisterUser v-if="showComponent_RegisterUser" @response="result_Register"></RegisterUser>
            </div>
        </div>
    </div>
</template>


<script setup lang='ts'>
import RegisterUser from "./RegisterUser.vue";
import TypeUser from "./TypeUser.vue"
import { ref } from "vue";
import { useRouter } from "vue-router";

var showComponent_RegisterUser = ref(false)
var showComponent_TypeUser = ref(true)
const router = useRouter()

const result_Register = (result: boolean) => {
    if (result) {
        console.log(result)
        showComponent_RegisterUser.value = false
        showComponent_TypeUser.value = true
    }
}

const result_Type = (result: boolean) => {
    if (result) {
        router.push('/home')        
        //此处为跳转逻辑
    } else {
        showComponent_RegisterUser.value = true
        showComponent_TypeUser.value = false
    }
}

</script>


<style scoped>
.FormContainer {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 30%;
    height: 40%;
}

.Back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: aqua;
    background-image: url('/login/LoginBack.webp');
    background-size: 100% 100%;

}

.LoginBack {
    position: absolute;
    width: 30%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    top: 0px;
    right: 0px;
}



h2 {
    position: absolute;
    left: 30px;
    font-size: 45px;
    color: rgb(47, 59, 160);
}
</style>