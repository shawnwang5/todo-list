export class FileUtils {
    /**
     * 以 dataURL 的形式读取文件内容
     * @param file 待读取的目标文件
     * @returns {Promise<any>}
     */
    static readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            if (file && FileReader) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function (evt) {
                    resolve((<any>evt.target).result)
                }
            } else {
                if (typeof FileReader === 'undefined') {
                    console.log('浏览器不支持FileReader')
                }
                resolve('')
            }
        })
    }
}
