import { FormControl } from '@angular/forms'

const IDValidator = require('id-validator')
const Validator = new IDValidator()

export class IdCardUtils {
    static isValid(idCard) {
        return Validator.isValid(idCard)
    }

    static validateIdCard(formControl: FormControl): { [key: string]: any } {
        return IdCardUtils.isValid(formControl.value) ? null : { validateIdCard: true }
    }
}
