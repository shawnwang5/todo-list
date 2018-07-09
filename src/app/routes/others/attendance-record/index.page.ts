import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: [ './index.page.scss' ]
})
export class AttendanceRecordPageComponent implements OnInit {
    sourceData = ''
    morningErrorArray: any[] = []
    eveningErrorArray: any[] = []
    overtimeArray: any[] = []

    constructor () {
    }

    ngOnInit (): void {
    }

    clearData () {
        this.morningErrorArray = []
        this.eveningErrorArray = []
        this.overtimeArray = []
    }

    parseSourceData () {
        this.clearData()
        const sourceArray = this.sourceData.split('\n')
        sourceArray.forEach((item: string) => {
            if (/09:\d{2}:\d{2}/.test(item)) {
                this.morningErrorArray.push(item)
            } else if (/1[0-7]:\d{2}:\d{2}/.test(item)) {
                this.eveningErrorArray.push(item)
            } else if (/2[0-3]:\d{2}:\d{2}/.test(item)) {
                this.overtimeArray.push(item)
            }
        })
    }

    onSubmitBtnClick () {
        this.parseSourceData()
    }
}
