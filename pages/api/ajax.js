import axios from 'axios'

var server = axios.create({})

server.interceptors.request.use((config) => {
    console.log(config,"config")
    return config
}, (error) => {
    throw new Error(error)
})

server.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    throw new Error(error)
})

const ajax = {
    post: (url, data) => {
        return server.post(url, data)
    },
    get: (url, data) => {
        return server.get(url, { params:data },{ needLoading: true, loadingText: '查询中...' })
    }
}

export default ajax