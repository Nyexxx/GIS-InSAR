import { defineStore } from "pinia";

export const userUserStore = defineStore('UserStore', {
    state:()=> {
        return{
            Username:"123",
            Password:"123",
            LogTime:""
        }
    },
    actions:{
        formatTime(time:number):string{
            if(time>10){
                return time.toString()
            }else{
                return "0"+time.toString()
            }
        },
        getCurrenTime():string{
            let currentTime:Date = new Date();
            let year:number = currentTime.getFullYear();
            let month:string = this.formatTime(currentTime.getMonth() + 1);
            let day:string = this.formatTime(currentTime.getDate());
            let hours:string= this.formatTime(currentTime.getHours());
            let minutes:string = this.formatTime(currentTime.getMinutes());
            let seconds:string = this.formatTime(currentTime.getSeconds());
            let timeString:string = year + "年" + month + "月" + day + "日   " + hours + " " + ":" + " " + minutes + " : " + seconds;
            return timeString;
        }
    }
})