import axios from 'axios'
import { mySwal } from '../swal/swal.utils'

export class HttpUtils {
    static getProtocolByUrl(url) {
        if (/^https?:\/\//.test(url)) {
            return /^https?:\/\//.exec(url)[0]
        }
        return ''
    }

    static post(url: string, params: Object) {
        return axios.post(url, params).catch(function (error) {
            mySwal({
                title: '提示',
                content: error.response.data
            })
        })
    }
}
