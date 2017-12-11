import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TodoListPageComponent } from './index.page'
import { ListGroupComponent } from './list-group/index.page'
import { MyMaterialModule } from '../../../material/index.module'
import { MemoDialogComponent } from './list-group/memo.dialog.component'
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
    imports: [
        MyMaterialModule,
        SharedModule,
        CommonModule
    ],
    declarations: [
        TodoListPageComponent,
        MemoDialogComponent,
        ListGroupComponent
    ],
    exports: [
        TodoListPageComponent
    ],
    entryComponents: [
        MemoDialogComponent
    ]
})
export class ListPageModule {
}
