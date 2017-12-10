import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { ITodoItem } from '../../../../store/app/model'
import { MatCheckboxChange } from '@angular/material'
import { AppActions } from '../../../../store/app/actions'
import { autoCloseAlert } from '../../../../utils/swal/swal.utils'

@Component({
    selector: 'app-list-group',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListGroupComponent implements OnInit {
    @Input() todoList: ITodoItem[]

    constructor(private appActions: AppActions) {
    }

    ngOnInit() {
    }

    onAddMemoClick(todoItem) {
        autoCloseAlert('待开发')
    }

    onReadMemoClick(todoItem) {
        autoCloseAlert('待开发')
    }

    onCheckboxChanged(todoItem, checkboxChange: MatCheckboxChange) {
        todoItem.isCompleted = checkboxChange.checked
        this.appActions.updateTodoList(this.todoList)
    }
}
