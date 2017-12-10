import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { AboutPageComponent } from './index.page'

const routes: Routes = [
    { path: '', component: AboutPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [
        AboutPageComponent
    ]
})
export class AboutModule {
}
