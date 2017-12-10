const swal = require('sweetalert')
export const mySwal = opts => {
    if (typeof opts === 'string') {
        return swal({ text: opts, button: '确定' })
    } else {
        return swal(opts)
    }
}

export function autoCloseAlert(title, timer = 2000) {
    return swal({
        title,
        timer,
        buttons: false
    })
}
