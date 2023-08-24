<template>
    <form action="#" method="post" class="Form">
        <input v-model="username" type="text" class="Username" placeholder="用户名" name="username" required>
        <div style="width: 100%; height: 5%;"></div>
        <input v-model="password" type="password" class="Password" placeholder="密码" name="password" required>
        <div style="width: 100%; height: 5%;"></div>
        <input v-model="repassword" type="password" class="Password" placeholder="再次输入密码" name="repassword" required>
        <div style="width: 100%; height: 5%;"></div>
        <button @click="RegisterUser" type="submit" class="Button">确认注册</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import URL from "../../config/ServeURL.ts"
let username = ref("")
let password = ref("")
let repassword = ref("")
const emit = defineEmits<{
    (event:'response',response:boolean):false
}>()

async function RegisterUser(event: Event) {
    event.preventDefault()
    if (password.value != repassword.value) {
        emit('response',false)
        alert("两次输入密码不一致")
        password.value = ""
        repassword.value = ""
        return
    } else {
        const response = await fetch(URL.URL_User_CreatUser, {
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
            console.log(data)
            emit('response',false)
            alert("提交失败:" + data.message)
        } else {
            emit('response',true)
            console.log(data)
            alert("注册成功")
        }

    }

}
</script>

<style>
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
</style>