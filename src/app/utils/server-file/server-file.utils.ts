export class ServerFileUtils {
    static wordDocCoverURL = 'assets/images/word.jpg'
    static excelDocCoverURL = 'assets/images/excel.jpg'
    static pdfCoverURL = 'assets/images/pdf.jpg'
    static fileCoverURL = 'assets/images/file.jpg'

    static fileTypeMap = {
        image: '.jpg,.jpeg,.png',
        wordDoc: '.doc,.docx',
        excelDoc: '.xls,.xlsx',
        pdf: '.pdf',
        apk: '.apk',
        ipa: '.ipa',
        cad: '.dwg,.dxf,.dwt'
    }

    /**
     * 获取带扩展名的文件名，确保文件时，扩展名正确
     * @param name
     * @param url
     * @returns {string}
     */
    static getFileNameByNameAndURL(name, url) {
        const suffix = ServerFileUtils.getFileSuffix(url)
        return name.replace(suffix, '') + suffix
    }

    static getFileNameByNameAndURLWithoutExt(name, url) {
        return name.replace(ServerFileUtils.getFileSuffix(url), '')
    }

    static getFileSuffix(url) {
        const suffixArray = /\.\w{3,4}$/.exec(url)
        return suffixArray ? suffixArray[0] : ''
    }

    static testFileSuffix(fileType, suffix) {
        if (suffix) {
            return ServerFileUtils.fileTypeMap[fileType].indexOf(suffix) !== -1
        } else {
            return false
        }
    }

    static isPDF(url) {
        return ServerFileUtils.testFileSuffix('pdf', ServerFileUtils.getFileSuffix(url))
    }

    static isAPK(url) {
        return ServerFileUtils.testFileSuffix('apk', ServerFileUtils.getFileSuffix(url))
    }

    static isIPA(url) {
        return ServerFileUtils.testFileSuffix('ipa', ServerFileUtils.getFileSuffix(url))
    }

    static isImage(url) {
        return ServerFileUtils.testFileSuffix('image', ServerFileUtils.getFileSuffix(url))
    }

    static isCAD(url) {
        return ServerFileUtils.testFileSuffix('cad', ServerFileUtils.getFileSuffix(url))
    }

    static isWordDoc(url) {
        return ServerFileUtils.testFileSuffix('wordDoc', ServerFileUtils.getFileSuffix(url))
    }

    static isExcelDoc(url) {
        return ServerFileUtils.testFileSuffix('excelDoc', ServerFileUtils.getFileSuffix(url))
    }

    static isValidSurveyFile(url) {
        return ServerFileUtils.isPDF(url) || ServerFileUtils.isImage(url) || ServerFileUtils.isCAD(url)
    }

    static isValidReportFile(url) {
        return ServerFileUtils.isPDF(url) || ServerFileUtils.isWordDoc(url) || ServerFileUtils.isExcelDoc(url)
    }
}
