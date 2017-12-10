import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { CustomFormsModule } from 'ng2-validation'
import { NgxPaginationModule } from 'ngx-pagination'
import { ClickOutsideModule } from 'ng-click-outside'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { UIPluginsModule } from './ui-plugins/index.module'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        HttpClientModule,
        ClickOutsideModule,
        UIPluginsModule,
        NgxPaginationModule,
        PaginationModule.forRoot()
    ],
    declarations: [],
    exports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        ClickOutsideModule,
        NgxPaginationModule,
        UIPluginsModule,
        PaginationModule
    ]
})
export class SharedModule {
}
