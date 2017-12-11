import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { ITodoItem } from '../../../../store/app/model'
import { MatCheckboxChange, MatDialog } from '@angular/material'
import { AppActions } from '../../../../store/app/actions'
import { MemoDialogComponent } from './memo.dialog.component'

@Component({
    selector: 'app-list-group',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListGroupComponent implements OnInit {
    @Input() todoList: ITodoItem[]

    constructor(private appActions: AppActions, private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    onAddMemoClick(todoItem) {
        const dialogRef = this.dialog.open(MemoDialogComponent, {
            width: '90%',
            data: todoItem,
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result !== MemoDialogComponent.cancel) {
                todoItem.memo = result
                this.appActions.updateTodoList(this.todoList)
            }
        })
    }

    onRemoveClick(todoItem, indexInList) {
        this.todoList.splice(indexInList, 1)
        this.appActions.updateTodoList(this.todoList)
    }

    onCheckboxChanged(todoItem, checkboxChange: MatCheckboxChange) {
        todoItem.isCompleted = checkboxChange.checked
        this.appActions.updateTodoList(this.todoList)
    }
}
