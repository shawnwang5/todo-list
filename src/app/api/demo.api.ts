import { AppConfig } from '../config/app.config'
import { HttpUtils } from '../utils/http/http.utils'

export class DemoApi {
    static getServerURL(path) {
        return AppConfig.serverURL + path
    }

    static post(url: string, params: Object) {
        return HttpUtils.post(url, params)
    }

    static function001() {
        return DemoApi.post(DemoApi.getServerURL('admin/function001'), {})
    }
}