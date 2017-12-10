import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { TodoListPageComponent } from './list/index.page'
import { SharedModule } from '../../shared/shared.module'
import { MyMaterialModule } from '../../material/index.module'
import { ListPageModule } from './list/index.module'

const routes: Routes = [
    { path: '', component: TodoListPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MyMaterialModule,
        ListPageModule,
        SharedModule,
        CommonModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class TodoListModule {
}
