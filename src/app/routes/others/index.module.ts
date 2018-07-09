import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { AttendanceRecordPageComponent } from './attendance-record/index.page'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: 'attendanceRecord', component: AttendanceRecordPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [
        AttendanceRecordPageComponent
    ]
})
export class OthersModule {
}
