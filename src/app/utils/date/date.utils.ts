import { format, isBefore, isDate, isEqual, parse } from 'date-fns'

export class DateUtils {
    static format(date, formatStr: string, options?: any) {
        return isDate(date) ? format(date, formatStr, options) : ''
    }

    static parseStrToDate(sourceStr) {
        return parse(sourceStr)
    }

    static isBefore(start, end) {
        if (isDate(start) && isDate(end)) {
            return isBefore(start, end)
        } else {
            return true
        }
    }

    static isEqual(start, end) {
        if (isDate(start) && isDate(end)) {
            return isEqual(start, end)
        } else {
            return false
        }
    }
}