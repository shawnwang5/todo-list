import { AppConfig } from '../../config/app.config'

export class FileHttpUtils {
    static getServerURL(path) {
        return AppConfig.serverURL + path
    }

    /**
     * 上传文件
     * @param url
     * @param params { string|FormData }
     * @param requestFinish
     * @param uploadCallback
     * @returns {XMLHttpRequest}
     */
    static uploadFile(url, params, requestFinish, uploadCallback) {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let resp
                try {
                    resp = JSON.parse(xhr.response)
                } catch (e) {
                    resp = xhr.response
                }
                requestFinish(resp, xhr.status)
            }
        }
        xhr.upload.onprogress = (event) => {
            uploadCallback(event.loaded, event.total)
        }
        xhr.open('POST', FileHttpUtils.getServerURL(url), true)
        xhr.send(params)
        return xhr
    }
}
