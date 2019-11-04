import HttpServe from './request'
import Vue from 'vue'
const $vue = new Vue()

let http = new HttpServe()

export function test(data) {
    return http.post("/kang1.wang/v1/subscribe/getTeacherIntroduceInfo",data).before(()=>{
        $vue.$loading(true,2)
    }).after(()=>{
        $vue.$loading(false,2)
    }).exec()
}