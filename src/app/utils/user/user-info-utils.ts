import * as CookieUtils from 'js-cookie'

export class UserInfoUtils {
    static getUserInfo() {
        return CookieUtils.getJSON('userInfo')
    }

    static setUserInfo(userInfo) {
        CookieUtils.set('userInfo', JSON.stringify(userInfo), { path: '/' })
    }

    static removeUserInfo() {
        CookieUtils.remove('userInfo', { path: '/' })
    }
}
