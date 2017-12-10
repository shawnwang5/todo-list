import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TodoListPageComponent } from './index.page'
import { ListGroupComponent } from './list-group/index.page'
import { MyMaterialModule } from '../../../material/index.module'

@NgModule({
    imports: [
        MyMaterialModule,
        CommonModule
    ],
    declarations: [
        TodoListPageComponent,
        ListGroupComponent
    ],
    exports: [
        TodoListPageComponent
    ]
})
export class ListPageModule {
}
