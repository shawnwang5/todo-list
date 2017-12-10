const swal = require('sweetalert')

interface ShowOptions {
    title?: string
    content?: string
    okBtnFn?: Function
    cancelBtnFn?: Function
}

export class SimpleConfirm {
    static execFn(targetFn) {
        if (typeof targetFn === 'function') {
            targetFn()
        }
    }

    static show(opts: ShowOptions) {
        swal({
            title: opts.title,
            content: opts.content,
            buttons: {
                cancel: {
                    text: '取消',
                    visible: true,
                    value: 'cancel'
                },
                confirm: {
                    text: '确定',
                    value: 'ok'
                }
            }
        }).then(value => {
            if (value === 'ok') {
                SimpleConfirm.execFn(opts.okBtnFn)
            } else if (value === 'cancel') {
                SimpleConfirm.execFn(opts.cancelBtnFn)
            }
        })
    }
}
