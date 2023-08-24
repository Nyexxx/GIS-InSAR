<template>
    <form :action=URL.URL_User_TypeUser class="Form" method="post">
        <input v-model="username" type="text" class="Username" placeholder="用户名" name="username" required>
        <div style="width: 100%; height: 5%;"></div>
        <input v-model="password" type="password" class="Password" placeholder="密码" name="password" required>
        <div style="width: 100%; height: 5%;"></div>
        <div class="buttonContainer">
            <button @click="successInSubmit" type="submit" class="Button">登录</button>
            <button @click="jumpToRegister" type="submit" class="Button">注册</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import URL from "../../config/ServeURL.ts"
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import { userUserStore } from '../../store/userStore.ts'
let username = ref("");
let password = ref("");
const emit = defineEmits<{
    (event: 'response', response: boolean): false
}>()
function jumpToRegister(event: Event) {
    event.preventDefault()
    console.log('ress')
    emit('response', false)
}

async function successInSubmit(event: Event) {
    event.preventDefault()
    const response = await fetch(URL.URL_User_TypeUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
    });
    const data = await response.json();
    if (response.status != 200) {
        password.value = ""
        alert("登录失败::" + data.message)
    } else {
        const UserStore = userUserStore()
        let {Username,Password,LogTime} = storeToRefs(UserStore)
        Username.value = username.value
        Password.value = password.value
        LogTime.value = UserStore.getCurrenTime();
        emit('response', true)
        alert("登录成功")
    }

}

</script>

<style scoped>
.Form {
    position: absolute;
    height: 50px;
    width: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Username {

    width: 80%;
    height: 30px;
    border-radius: 10px;
}

.Password {
    width: 80%;
    height: 30px;
    border-radius: 10px;
}

.Button {
    width: 50%;
    border-radius: 10px;
    height: 30px;
    background-color: aquamarine;
}

.buttonContainer {
    width: 80%;
}
</style>