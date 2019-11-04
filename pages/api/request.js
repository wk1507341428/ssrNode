import axios from 'axios'
import Vue from 'vue'
const $vue = new Vue()

var server = axios.create({})
server.interceptors.request.use((config) => {
    return config
}, (error) => {
    throw new Error(error)
})

server.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    throw new Error(error)
})

class HttpServe {

    constructor(baseUrl = "", checkCode = null){

        this.useLoading = false
        this.path = ""
        this.method = ""

        this.beforeRequestFn = null
        this.afterRequestFn = null
        this.successRequestFn = null
        this.failRequestFn = null

        this.params = {}
        this.body = {}
        this.headers = {}
        this.baseUrl = baseUrl

        this.checkCode = checkCode

    }

    get(path, params = {}) {
        this.path = path
        this.method = "get"
        this.params = params
        return this
    }
    
    post(path, body = {}) {
        this.path = path
        this.method = "post"
        this.body = body
        return this
    }

    withLoading(){
        this.useLoading = true
        return this
    }

    before(fun){
        this.beforeRequestFn = typeof fun === 'function' && fun
        return this
    }

    after(fun){
        this.afterRequestFn =  typeof fun === 'function' && fun
        return this
    }

    success(fun){
        this.successRequestFn =  typeof fun === 'function' && fun
        return this
    }

    fail(fun){
        this.failRequestFn =  typeof fun === 'function' && fun
        return this
    }

    setHeaders(headers = {}){
        this.headers = Object.assign(this.headers,headers)
        return this
    }

    exec(){

        const url = `${this.baseUrl}${this.path}`

        return new Promise(( resolve, reject ) =>{

            const request = {
                url,
                method: this.method,
                data: this.body,
                params: this.params,
                headers: this.headers,
                baseUrl: this.baseUrl
            }

            this.beforeRequestFn && typeof this.beforeRequestFn === 'function' && this.beforeRequestFn()

            if( this.useLoading && !this.beforeRequestFn ){
                $vue.$loading(true)
            }

            server(request).then(response => {

                this.afterRequestFn && typeof this.afterRequestFn === 'function' && this.afterRequestFn()
                this.successRequestFn && typeof this.successRequestFn === 'function' && this.successRequestFn()

                if( this.useLoading && !this.afterRequestFn ){
                    $vue.$loading(false)
                }

                const { code } = response

                if( !this.checkCode || this.checkCode.includes(code) ){
                    resolve(response)
                }else{
                    reject(response)
                }

            }).catch(err => {

                this.afterRequestFn && typeof this.afterRequestFn === 'function' && this.afterRequestFn()
                this.failRequestFn && typeof this.failRequestFn === 'function' && this.failRequestFn()

                if( this.useLoading && !this.afterRequestFn ){
                    $vue.$loading(false)
                }

                reject(err)

            })

        })

    }
}

export default HttpServe