import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingService } from './setting/setting.service'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        SettingService
    ]
})
export class CoreModule {
}
